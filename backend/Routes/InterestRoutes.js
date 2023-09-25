//InterestRoutes.js (Rutas de intereses)

const express = require('express');
const InterestController = require('../Controllers/InterestController');


const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/interests', InterestController.getAllInterests);

// Rutas privadas (requieren autenticación)
router.post('/interest', InterestController.createInterest);
router.get('/interest/:id', InterestController.getInterestById);
router.get('/interest/:name', InterestController.getInterestByName);
router.put('/interest/:id/update', InterestController.updateInterestById);
router.delete('/interest/:id/delete', InterestController.deleteInterest);

module.exports = router;
