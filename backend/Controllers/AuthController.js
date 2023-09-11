const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../helpers/emailVerification');

//authcontroller
//registro
const register = async (req, res) => {
    try {
        const { name, age, email, password, profile_pictures, friends } = req.body;

        //verifica si el email ya existe
        const existeUsuario = await User.findOne({ email });
        if (existeUsuario) {
            return res.status(400).json({
                message: 'El email ya está registrado'
            });
        }

        //encripta la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        //crea el usuario
        const user = new User({
            name,
            age,
            email,
            password: hashedPassword,
            profile_pictures,
            friends
        });


        //crea el token
        const token = jwt.sign({ userId: user._id, userName: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.emailToken = token;

        //guarda el usuario
        await user.save();
        //llama a la funcion sendemail
        await sendEmail(user);

        //envia la respuesta
        res.status(201).json({ message: 'Usuario creado', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validacion datos de entrada 
        if (!(email && password)) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }

        //verifica email registrado 
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email no registrado' });
        }

        //verifica contraseña este correcta 
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        //genera token
        const token = jwt.sign(
            { userId: user._id, email: user.email }, // payload
            process.env.JWT_SECRET, // secreto
            { expiresIn: '1h' } // opciones
        );

        //devolver token
        res.status(200).json({ message: 'Login exitoso', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//confirmar email 
const confirmEmail = async (req, res) => {
    //trycatch
    try {
        const { token } = req.params.token;
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //encuentra el usuario por id 
        const user = await User.findbyId(payload.userId);

        //si el usuario no existe
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        //cambiar isVerified a true
        user.isVerified = true;

        //guardar usuario
        await user.save();

        //enviar respuesta
        res.status(200).json({ message: 'Email confirmado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//exportar
module.exports = {
    register,
    login,
    confirmEmail
};


