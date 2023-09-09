//EventRoutes.js: Rutas de eventos

const express = require('express');
const EventController = require('../controllers/EventController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', EventController.getAllEvents);

// Rutas que requieren autenticación
router.post('/create', isAuthenticated, EventController.createEvent);
router.get('/:id', isAuthenticated, EventController.getEventById);
router.put('/:id/update', isAuthenticated, EventController.updateEvent);
router.delete('/:id/delete', isAuthenticated, EventController.deleteEvent);

module.exports = router;
