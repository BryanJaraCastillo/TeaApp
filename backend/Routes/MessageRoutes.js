//MessagesRoutes.js

const express = require('express');
const MessageController = require('../Controllers/MessageController');
const isAuthenticated = require('../middlewares/isAuthenticated');


const router = express.Router();


router.get('/send', isAuthenticated, MessageController.getMessages);


// Rutas privadas (requieren autenticación)
router.post('/message', isAuthenticated, MessageController.sendMessage);
router.delete('/message/:id/delete', isAuthenticated, MessageController.deleteMessage);

module.exports = router;
