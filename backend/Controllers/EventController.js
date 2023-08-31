//controlador CRUD para el model event.js 
//importamos el modelo
const Event = require('../models/Event');

//crear evento
const createEvent = async (req, res) => {
    //try catch para manejar errores
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json(newEvent);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

//buscar todos los eventos 
const getAllEvents = async (req, res) => {
    //try catch para manejar errores 
    try {
        //creamos constante con await para esperar que se ejecute la busqueda de encontrar los eventos 
        const event = await Event.find().populate('attendees','name');
        //si no encuentra eventos envia 404, significando que no hay eventos.
        if(!event.length){
            return res.status(404).json({message: 'No hay eventos'});
        }
        //devolvemos el json y los eventos encontrados
        res.status(200).json(event);
    }catch (error) {
        //no se encontro ningun evento
        res.status(404).json({message: error.message});
    }
};

//buscar eventos por id
const getEventById = async (req, res) => {
    //try catch para manejar errores 
    try {
        //creamos constante con await para esperar que se ejecute la busqueda de encontrar los eventos 
        const event = await Event.findById(req.params.id);
        //devolvemos el json y los eventos encontrados
        res.status(200).json(event);

    }catch (error) {
        //no se encontro ningun evento
        res.status(404).json({message: error.message});
    }
};

//buscar eventos por nombre 
const getEventByName = async (req, res) => {
    //try catch para manejar errores 
    try {
        //creamos constante con await para esperar que se ejecute la busqueda de encontrar los eventos 
        const event = await Event.find({name: req.params.name});
        //devolvemos el json y los eventos encontrados
        res.status(200).json(event);

    }catch (error) {
        //no se encontro ningun evento
        res.status(404).json({message: error.message});
    }
}; 

//buscar eventos por fecha 
const getEventByDate = async (req, res) => {
    //try catch para manejar errores 
    try {
        //creamos constante con await para esperar que se ejecute la busqueda de encontrar los eventos 
        const event = await Event.find({date: req.params.date});
        //devolvemos el json y los eventos encontrados
        res.status(200).json(event);

    }catch (error) {
        //no se encontro ningun evento
        res.status(404).json({message: error.message});
    }
}

//actualizar evento
const updateEvent = async (req, res) => {
    //try catch para manejar errores
    try {
        //creamos constante con await para que encuentre evento por id y lo updatee 
        const event = await Event.findByIdAndUpdate (req.params.id ,req.body ,{new : true});
        //si no encuentra el evento envia error 404
        if (!event){
            return res.status(404).json({message: 'Evento no encontrado'});
        }
        //devolvemos el json y el evento actualizado 
        res.status.json(event);
    }catch (error) {
        //error 500
        res.status(500).json({message: error.message});
    }
};

//borrar evento
const deleteEvent = async (req, res) => {
    //try catch para manejar errores
    try {
        //creamos constante con await para que encuentre evento por id y lo borre 
        const event = await Event.findByIdAndDelete(req.params.id);
        //si no encuentra el evento envia error 404
        if (!event){
            return res.status(404).json({message: 'Evento no encontrado'});
        }
        //devolvemos el json y el evento borrado 
        res.status.json({message: 'Evento eliminado'});
    }catch (error) {
        //error 500
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    getEventByName,
    getEventByDate,
    updateEvent,
    deleteEvent
};
