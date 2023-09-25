//GroupRoutes.js (Rutas de grupos)

const express = require('express');
const GroupController = require('../Controllers/GroupController');


const router = express.Router();

// Rutas públicas (no requieren autenticación)
router.get('/groups', GroupController.getAllGroups);

// Rutas privadas (requieren autenticación)
router.post('/group', GroupController.createGroup);
router.get('/group/:id', GroupController.getGroupsById);
router.get('/group/:name', GroupController.getGroupsByName);
router.put('/group/:id/update', GroupController.updateGroupById);
router.delete('/group/:id/delete', GroupController.deleteGroupById);

module.exports = router;
