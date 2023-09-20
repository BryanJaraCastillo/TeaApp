//InterestRoutes.js (Rutas de intereses)

const express = require('express');
const InterestController = require('../Controllers/InterestController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', InterestController.getAllInterests);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, InterestController.createInterest);
router.get('/:id', isAuthenticated, InterestController.getInterestById);
router.get('/:name', isAuthenticated, InterestController.getInterestByName);
router.put('/:id/update', isAuthenticated, InterestController.updateInterestById);
router.delete('/:id/delete', isAuthenticated, InterestController.deleteInterest);

module.exports = router;
