//GroupRoutes.js (Rutas de grupos)

const express = require('express');
const GroupController = require('../Controllers/GroupController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', GroupController.getAllGroups);

// Rutas privadas (requieren autenticación)
router.post('/create', isAuthenticated, GroupController.createGroup);
router.get('/:id', isAuthenticated, GroupController.getGroupsById);
router.get('/:name', isAuthenticated, GroupController.getGroupsByName);
router.put('/:id/update', isAuthenticated, GroupController.updateGroupById);
router.delete('/:id/delete', isAuthenticated, GroupController.deleteGroupById);

module.exports = router;
