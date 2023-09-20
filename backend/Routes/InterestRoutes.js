//InterestRoutes.js (Rutas de intereses)

const express = require('express');
const InterestController = require('../Controllers/InterestController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', InterestController.getAllInterests);

// Rutas privadas (requieren autenticación)
router.post('/interest', isAuthenticated, InterestController.createInterest);
router.get('/interest/:id', isAuthenticated, InterestController.getInterestById);
router.get('/interest/:name', isAuthenticated, InterestController.getInterestByName);
router.put('/interest/:id/update', isAuthenticated, InterestController.updateInterestById);
router.delete('/interest/:id/delete', isAuthenticated, InterestController.deleteInterest);

module.exports = router;
