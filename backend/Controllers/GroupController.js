const Group = require('../Models/Group');

//crear un grupo nuevo verificando 
//que el usuario que lo crea sea el mismo que lo administra
const createGroup = async (req, res) => {
    //try catch para manejar errores
    try {
        //se crea un new group con los datos del body
        const newGroup = new Group({
            ...req.body,//se copia todo el objeto del body
            admin: [req.user._id]  //se agrega el id del usuario que lo crea
        });
        //se guarda el grupo
        await newGroup.save();
        //se retorna el grupo creado
        return res.status(201).json(newGroup);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
};

//obtener todos los grupos
const getAllGroups = async (req, res) => {
    //try catch para manejar errores
    try {
        //se obtienen todos los grupos
        const groups = await Group.find();
        //se retorna el array de grupos
        return res.status(200).json(groups);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
}

//obtener un grupo por id
const getGroupsById = async (req, res) => {
    //try catch para manejar error 
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Grupo no encontrado' });
        }
        return res.status(200).json(group);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//obtener un grupo por nombre
const getGroupsByName = async (req, res) => {
    //try catch para manejar error 
    try {
        const group = await Group.findOne({ name: req.params.name });
        if (!group) {
            return res.status(404).json({ message: 'Grupo no encontrado' });
        }
        return res.status(200).json(group);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//actualizar un grupo por id
const updateGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if(!group){
            return res.status(404).json({message: 'Grupo no encontrado'});
        }
        //se verifica que el usuario que lo actualiza sea el mismo que lo creo
        if (!group.admin.includes(req.user._id)) {
            return res.status(403).json({ message: 'No tienes permiso para actualizar este grupo' });
        }
        //se actualiza el grupo
        const updatedGroup = await Group.findByIdAndUpdate(req.params.id, reqbody , {new: true});
        return res.status(200).json(updatedGroup);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//eliminar un grupo por id que solo puede ser eliminado por el usuario que lo creo
const deleteGroupById = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if(!group){
            return res.status(404).json({message: 'Grupo no encontrado'});
        }
        //se verifica que el usuario que lo elimina sea el mismo que lo creo
        if (!group.admin.includes(req.user._id)) {
            return res.status(403).json({ message: 'No tienes permiso para eliminar este grupo' });
        }
        //se elimina el grupo
        await Group.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: 'Grupo eliminado'});
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createGroup,
    getAllGroups,
    getGroupsById,
    getGroupsByName,
    updateGroupById,
    deleteGroupById
}




