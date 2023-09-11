//MessagesRoutes.js

const express = require('express');
const MessageController = require('../controllers/MessageController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', MessageController.getAllMessages);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, MessageController.createMessage);
router.get('/:id', isAuthenticated, MessageController.getMessageById);
router.get('/:name', isAuthenticated, MessageController.getMessageByName);
router.put('/:id/update', isAuthenticated, MessageController.updateMessage);
router.delete('/:id/delete', isAuthenticated, MessageController.deleteMessage);

module.exports = router;
