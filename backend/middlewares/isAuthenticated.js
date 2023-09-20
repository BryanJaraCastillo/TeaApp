//middleware isAuthenticated

const jwt = require('jsonwebtoken');
const User = require('../models/User');

//middleware para verificar si el usuario esta autenticado ocupando bearer token
const isAuthenticated = async (req, res, next) => {
    //try catch para manejar errores
    try {
        //verificamos si existe el encabezado de autorizacion
        if (!req.headers.authorization) {
            return res.status(403).json({ message: 'No se proporcionó el encabezado de autorización' });
          }
        //verificamos si existe el token
        const token = req.headers.authorization.split(' ')[1];
        //si no existe el token
        if(!token){
            return res.status(403).json({message: 'No existe token'});
        }
        //verificamos si el token es valido
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //si no es valido el token
        if(!decoded){
            return res.status(403).json({message: 'Token no valido'});
        }
        //buscamos el usuario por id
        const user = await User.findById(decoded.id);
        //si no existe el usuario
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
            console.log("esta llegando aca al middelware")
        }
        //guardamos el usuario en req.user
        req.user = user;
        //ejecutamos el siguiente middleware
        next();
    }catch (error) {
        //si existe un error
        res.status(500).json({message: error.message});
    }
}

//exportamos el middleware
module.exports = isAuthenticated;
