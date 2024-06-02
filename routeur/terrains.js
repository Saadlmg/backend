const express = require('express');
const router = express.Router();
const terrainController = require('../controllers/terrains');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer un nouveau terrain
router.post('/', isAdmin, terrainController.createTerrain);

// Route pour obtenir la liste de tous les terrains
router.get('/', terrainController.getAllTerrains);

// Route pour obtenir les détails d'un terrain spécifique
router.get('/:id', terrainController.getTerrainById);

// Route pour mettre à jour les informations d'un terrain spécifique
router.put('/:id', isAdmin, terrainController.updateTerrainById);

// Route pour supprimer un terrain spécifique
router.delete('/:id', isAdmin, terrainController.deleteTerrainById);

module.exports = router;
