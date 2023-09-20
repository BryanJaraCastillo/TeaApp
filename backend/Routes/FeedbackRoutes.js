//FeedbackRoutes.js (Rutas de feedback)
const express = require('express');
const FeedbackController = require('../Controllers/FeedbackController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', FeedbackController.getAllFeedbacks);

// Rutas privadas (requieren autenticación)
router.post('/feedback', isAuthenticated, FeedbackController.createFeedback);
router.get('/feedback/:id', isAuthenticated, FeedbackController.getFeedbackById);
router.get('/feedback/:name', isAuthenticated, FeedbackController.getFeedbackByName);
router.put('/feedback/:id/update', isAuthenticated, FeedbackController.updateFeedback);
router.delete('/feedback/:id/delete', isAuthenticated, FeedbackController.deleteFeedback);

module.exports = router;
