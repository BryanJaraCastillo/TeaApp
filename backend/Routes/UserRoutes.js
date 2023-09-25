//UserRoutes.js (Rutas de usuarios)
const express = require('express');
const UserController = require('../Controllers/UserController');


const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/users', UserController.getAllUsers);

// Rutas privadas (requieren autenticación)
router.post('/user', UserController.createUser);
router.get('/user/:id', UserController.getUserById);
router.get('/user/:name', UserController.getUserByName);
router.put('/user/:id/update', UserController.updateUser);
router.delete('/user/:id/delete', UserController.deleteUser);

module.exports = router;
