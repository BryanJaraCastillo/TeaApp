//UserRoutes.js (Rutas de usuarios)
const express = require('express');
const UserController = require('../controllers/UserController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', UserController.getAllUsers);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, UserController.createUser);
router.get('/:id', isAuthenticated, UserController.getUserById);
router.get('/:name', isAuthenticated, UserController.getUserByName);
router.put('/:id/update', isAuthenticated, UserController.updateUser);
router.delete('/:id/delete', isAuthenticated, UserController.deleteUser);

module.exports = router;
