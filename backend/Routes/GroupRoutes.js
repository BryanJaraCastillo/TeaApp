//GroupRoutes.js (Rutas de grupos)

const express = require('express');
const GroupController = require('../Controllers/GroupController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/', GroupController.getAllGroups);

// Rutas privadas (requieren autenticación)
router.post('/group', isAuthenticated, GroupController.createGroup);
router.get('/group/:id', isAuthenticated, GroupController.getGroupsById);
router.get('/group/:name', isAuthenticated, GroupController.getGroupsByName);
router.put('/group/:id/update', isAuthenticated, GroupController.updateGroupById);
router.delete('/group/:id/delete', isAuthenticated, GroupController.deleteGroupById);

module.exports = router;
