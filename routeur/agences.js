/*const express = require('express');
const { isAdmin, isClient } = require('../middleware/auth');
const router = express.Router();
const {
  getAllAgences,
  getAgenceById,
  createAgence,
  updateAgence,
  deleteAgence,
} = require('../controllers/agences');

// Route pour récupérer toutes les agences
router.get('/agences',isClient, getAllAgences);

// Route pour récupérer une agence par ID
router.get('/agences/:id',isClient, getAgenceById);

// Route pour créer une nouvelle agence
router.post('/agences',isAdmin, createAgence);

// Route pour mettre à jour une agence existante
router.put('/agences/:Id',isAdmin, updateAgence);

// Route pour supprimer une agence existante
router.delete('/agences/:Id',isAdmin, deleteAgence);

module.exports = router;
*/

const express = require('express');
const { isAdmin, isClient } = require('../middleware/auth');
const router = express.Router();
const {
  getAllAgences,
  getAgenceById,
  createAgence,
  updateAgence,
  deleteAgence,
} = require('../controllers/agences');

// Route pour récupérer toutes les agences
router.get('/agences',isClient, getAllAgences);

// Route pour récupérer une agence par ID
router.get('/agences/:id',isClient, getAgenceById);

// Route pour créer une nouvelle agence
router.post('/agences',isAdmin, createAgence);

// Route pour mettre à jour une agence existante
router.put('/agences/:Id',isAdmin, updateAgence);

// Route pour supprimer une agence existante
router.delete('/agences/:Id',isAdmin, deleteAgence);

module.exports = router;
