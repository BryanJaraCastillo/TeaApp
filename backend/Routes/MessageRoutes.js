//MessagesRoutes.js

const express = require('express');
const MessageController = require('../Controllers/MessageController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();


router.get('/:id', isAuthenticated, MessageController.getMessages);


// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, MessageController.sendMessage);
router.delete('/:id/delete', isAuthenticated, MessageController.deleteMessage);

module.exports = router;
