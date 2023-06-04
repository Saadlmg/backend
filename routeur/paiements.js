/*const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiements');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour récupérer tous les paiements
router.get('/',isAdmin, paiementController.getAllPaiements);

// Route pour récupérer un paiement par id
router.get('/',isClient, paiementController.getPaiementById);

// Route pour créer un nouveau paiement
router.post('/',isClient, paiementController.createPaiement);

// Route pour mettre à jour un paiement existant
router.put('/:Id',isAdmin, paiementController.updatePaiementById);

// Route pour supprimer un paiement existant
router.delete('/:Id',isAdmin, paiementController.deletePaiementById);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiements');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour récupérer tous les paiements
router.get('/',isAdmin, paiementController.getAllPaiements);

// Route pour récupérer un paiement par id
router.get('/',isClient, paiementController.getPaiementById);

// Route pour créer un nouveau paiement
router.post('/',isClient, paiementController.createPaiement);

// Route pour mettre à jour un paiement existant
router.put('/:Id',isAdmin, paiementController.updatePaiementById);

// Route pour supprimer un paiement existant
router.delete('/:Id',isAdmin, paiementController.deletePaiementById);

module.exports = router;
