//FeedbackRoutes.js (Rutas de feedback)
const express = require('express');
const FeedbackController = require('../controllers/FeedbackController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', FeedbackController.getAllFeedbacks);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, FeedbackController.createFeedback);
router.get('/:id', isAuthenticated, FeedbackController.getFeedbackById);
router.get('/:name', isAuthenticated, FeedbackController.getFeedbackByName);
router.put('/:id/update', isAuthenticated, FeedbackController.updateFeedback);
router.delete('/:id/delete', isAuthenticated, FeedbackController.deleteFeedback);

module.exports = router;
