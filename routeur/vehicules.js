/*const express = require('express');
const router = express.Router();
const vehiculeController = require('../controllers/vehicules');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer un nouveau véhicule
router.post('/',isAdmin, vehiculeController.createVehicule);

// Route pour obtenir la liste de tous les véhicules
router.get('/', vehiculeController.getAllVehicules);

// Route pour obtenir les détails d'un véhicule spécifique
router.get('/:id',isClient, vehiculeController.getVehiculeById);

// Route pour mettre à jour les informations d'un véhicule spécifique
router.put('/:id',isAdmin, vehiculeController.updateVehiculeById);

// Route pour supprimer un véhicule spécifique
router.delete('/:id',isAdmin, vehiculeController.deleteVehiculeById);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const vehiculeController = require('../controllers/vehicules');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer un nouveau véhicule
router.post('/',isAdmin, vehiculeController.createVehicule);

// Route pour obtenir la liste de tous les véhicules
router.get('/', vehiculeController.getAllVehicules);

// Route pour obtenir les détails d'un véhicule spécifique
router.get('/:id',isClient, vehiculeController.getVehiculeById);

// Route pour mettre à jour les informations d'un véhicule spécifique
router.put('/:id',isAdmin, vehiculeController.updateVehiculeById);

// Route pour supprimer un véhicule spécifique
router.delete('/:id',isAdmin, vehiculeController.deleteVehiculeById);

module.exports = router;
