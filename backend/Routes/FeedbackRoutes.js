//FeedbackRoutes.js (Rutas de feedback)
const express = require('express');
const FeedbackController = require('../Controllers/FeedbackController');


const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/feedbacks', FeedbackController.getAllFeedbacks);

// Rutas privadas (requieren autenticación)
router.post('/feedback', FeedbackController.createFeedback);
router.get('/feedback/:id', FeedbackController.getFeedbackById);
router.get('/feedback/:name', FeedbackController.getFeedbackByName);
router.put('/feedback/:id/update', FeedbackController.updateFeedback);
router.delete('/feedback/:id/delete', FeedbackController.deleteFeedback);

module.exports = router;
