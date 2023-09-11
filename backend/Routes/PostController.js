//PostRoutes.js (Rutas de posts)
const express = require('express');
const PostController = require('../controllers/PostController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', PostController.getAllPosts);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, PostController.createPost);
router.get('/:id', isAuthenticated, PostController.getPostById);
router.get('/:name', isAuthenticated, PostController.getPostByName);
router.put('/:id/update', isAuthenticated, PostController.updatePost);
router.delete('/:id/delete', isAuthenticated, PostController.deletePost);

module.exports = router;
