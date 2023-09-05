const Feedback = require('../Models/Feedback');

//crear un feedback nuevo verificando
//que el usuario que lo crea sea el mismo que lo administra
const createFeedback = async (req, res) => {
    //try catch para manejar errores
    try {
        //se crea un new feedback con los datos del body
        const newFeedback = new Feedback({
            ...req.body,//se copia todo el objeto del body
            user: req.user._id  //se agrega el id del usuario que lo crea
        });
        //se guarda el feedback
        await newFeedback.save();
        //se retorna el feedback creado
        return res.status(201).json(newFeedback);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
};

//obtener todos los feedbacks
const getAllFeedbacks = async (req, res) => {
    //try catch para manejar errores
    try {
        //se obtienen todos los feedbacks
        const feedbacks = await Feedback.find();
        //se retorna el array de feedbacks
        return res.status(200).json(feedbacks);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
}

//obtener un feedback por id
const getFeedbackById = async (req, res) => {
    //try catch para manejar error 
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        return res.status(200).json(feedback);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//obtener un feedback por nombre
const getFeedbackByName = async (req, res) => {
    //try catch para manejar error 
    try {
        const feedback = await Feedback.findOne({ name: req.params.name });
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        return res.status(200).json(feedback);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//eliminar un feedback
const deleteFeedback = async (req, res) => {
    //try catch para manejar error 
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        await Feedback.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: 'Feedback eliminado' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//actualizar un feedback
const updateFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback no encontrado' });
        }
        await Feedback.updateOne({ _id: req.params.id }, { ...req.body });
        return res.status(200).json({ message: 'Feedback actualizado' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//exportar los controladores
module.exports = {
    createFeedback,
    getAllFeedbacks,
    getFeedbackById,
    getFeedbackByName,
    deleteFeedback,
    updateFeedback
};

