//UserRoutes.js (Rutas de usuarios)
const express = require('express');
const UserController = require('../Controllers/UserController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/users', UserController.getAllUsers);

// Rutas privadas (requieren autenticación)
router.post('/user', isAuthenticated, UserController.createUser);
router.get('/user/:id', isAuthenticated, UserController.getUserById);
router.get('/user/:name', isAuthenticated, UserController.getUserByName);
router.put('/user/:id/update', isAuthenticated, UserController.updateUser);
router.delete('/user/:id/delete', isAuthenticated, UserController.deleteUser);

module.exports = router;
