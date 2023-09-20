const User = require('../models/User'); // Importar tu modelo de Usuario

// Crear usuario
const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Leer usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar usuario 
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Borrar usuario
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByName = async (req, res) => {
  try {
    const user = await User.find({ name: req.params.name });

    if (!user) {
      console.log("esta llegando aca al controller")
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: 'No hay usuarios' });
    }

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByName
};
