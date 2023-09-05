const Interest = require('../Models/Interest');

//crear un interes nuevo verificando
//que el usuario que lo crea sea el mismo que lo administra

const createInterest = async (req, res) => {
    //try catch para manejar errores
    try {
        //se crea un new interest con los datos del body
        const newInterest = new Interest({
            ...req.body,//se copia todo el objeto del body
            user: req.user._id  //se agrega el id del usuario que lo crea
        });
        //se guarda el interest
        await newInterest.save();
        //se retorna el interest creado
        return res.status(201).json(newInterest);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
}

//obtener todos los intereses
const getAllInterests = async (req, res) => {
    //try catch para manejar errores
    try {
        //se obtienen todos los intereses
        const interests = await Interest.find();
        //se retorna el array de intereses
        return res.status(200).json(interests);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
}

//obtener un interes por id
const getInterestById = async (req, res) => {
    //try catch para manejar error 
    try {
        const interest = await Interest.findById(req.params.id);
        if (!interest) {
            return res.status(404).json({ message: 'Interes no encontrado' });
        }
        return res.status(200).json(interest);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//obtener un interes por nombre

const getInterestByName = async (req, res) => {
    //try catch para manejar error 
    try {
        const interest = await Interest.findOne({ name: req.params.name });
        if (!interest) {
            return res.status(404).json({ message: 'Interes no encontrado' });
        }
        return res.status(200).json(interest);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//actualizar un interes
const updateInterestById = async (req, res) => {
    //try catch para manejar error 
    try {
        //se busca el interes por id
        const interest = await Interest.findById(req.params.id);
        //si no existe se retorna 404
        if (!interest) {
            return res.status(404).json({ message: 'Interes no encontrado' });
        }
        //si existe se actualiza
        await Interest.updateOne({ _id: req.params.id }, { $set: req.body });
        //se retorna el interes actualizado
        return res.status(200).json({ message: 'Interes actualizado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//eliminar un interes

const deleteInterest = async (req, res) => {
    //try catch para manejar error 
    try {
        //se busca el interes por id
        const interest = await Interest.findById(req.params.id);
        //si no existe se retorna 404
        if (!interest) {
            return res.status(404).json({ message: 'Interes no encontrado' });
        }
        //si existe se elimina
        await Interest.deleteOne({ _id: req.params.id });
        //se retorna el interes eliminado
        return res.status(200).json({ message: 'Interes eliminado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createInterest,
    getAllInterests,
    getInterestById,
    getInterestByName,
    updateInterestById,
    deleteInterest
};