//PostRoutes.js (Rutas de posts)
const express = require('express');
const PostController = require('../Controllers/PostController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/posts', PostController.getAllPosts);

// Rutas privadas (requieren autenticación)
router.post('/post', isAuthenticated, PostController.createPost);
router.get('/post/:id', isAuthenticated, PostController.getPostById);
router.get('/post/:name', isAuthenticated, PostController.getPostByAuthor);
router.put('/post/:id/update', isAuthenticated, PostController.updatePostById);
router.delete('/post/:id/delete', isAuthenticated, PostController.deletePostById);

module.exports = router;
