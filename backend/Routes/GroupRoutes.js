//GroupRoutes.js (Rutas de grupos)

const express = require('express');
const GroupController = require('../controllers/GroupController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', GroupController.getAllGroups);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, GroupController.createGroup);
router.get('/:id', isAuthenticated, GroupController.getGroupById);
router.get('/:name', isAuthenticated, GroupController.getGroupByName);
router.put('/:id/update', isAuthenticated, GroupController.updateGroup);
router.delete('/:id/delete', isAuthenticated, GroupController.deleteGroup);

module.exports = router;
