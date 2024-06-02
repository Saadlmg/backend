/*const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locations');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour récupérer toutes les locations
router.get('/',isAdmin, locationController.getAllLocations);

// Route pour récupérer une location
router.get('/:id',isClient, locationController.getLocationById);

// Route pour créer une nouvelle location
router.post('/',isClient, locationController.createLocation);

// Route pour mettre à jour une location
router.put('/:id',isClient, locationController.updateLocationById);

// Route pour supprimer une location
router.delete('/:id',isAdmin, locationController.deleteLocationById);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locations');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour récupérer toutes les locations
router.get('/',isAdmin, locationController.getAllLocations);

// Route pour récupérer une location
router.get('/:id',isClient, locationController.getLocationById);

// Route pour créer une nouvelle location
router.post('/',isClient, locationController.createLocation);

// Route pour mettre à jour une location
router.put('/:id',isClient, locationController.updateLocationById);

// Route pour supprimer une location
router.delete('/:id',isAdmin, locationController.deleteLocationById);

// Route to get all locations of a client by their ID
router.get('/client/:id', locationController.getClientLocations);


module.exports = router;
