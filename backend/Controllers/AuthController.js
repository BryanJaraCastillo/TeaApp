const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//authcontroller

const register = async (req, res) => {
    try { 
        const { name, age ,email,password, profile_pictures, friends} =req.body;

        //verifica si el email ya existe
        const existeUsuario = await User.findOne({email});
        if(existeUsuario){
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

        //guarda el usuario
        await user.save();

        res
        
    }