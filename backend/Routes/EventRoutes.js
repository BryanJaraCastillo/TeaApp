//EventRoutes.js: Rutas de eventos

const express = require('express');
const EventController = require('../Controllers/EventController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/events', EventController.getAllEvents);

// Rutas que requieren autenticación
router.post('/event', isAuthenticated, EventController.createEvent);
router.get('/event/:id', isAuthenticated, EventController.getEventById);
router.get('/event/:name', isAuthenticated, EventController.getEventByName);
router.put('/event/:id/update', isAuthenticated, EventController.updateEvent);
router.delete('/event/:id/delete', isAuthenticated, EventController.deleteEvent);

module.exports = router;
