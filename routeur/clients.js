/*const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');
const { isAdmin, isClient } = require('../middleware/auth');
const passportConfig = require('../passportConfig');
const bcrypt = require('bcrypt');


// Route pour récupérer tous les clients
router.get('/',isAdmin, clientController.getAllClients);

// Route pour récupérer un client par ID
router.get('/:id', clientController.getClientById);

// Route pour créer un nouveau client
router.post('/', clientController.createClient);

// Route pour mettre à jour un client par ID
router.put('/:id',isClient, clientController.updateClient);

// Route pour supprimer un client par ID
router.delete('/:id',isClient, clientController.deleteClient);


router.post('/login', clientController.loginClient);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');
const { isAdmin, isClient } = require('../middleware/auth');
const passportConfig = require('../passportConfig');
const bcrypt = require('bcrypt');


// Route pour récupérer tous les clients
router.get('/',isAdmin, clientController.getAllClients);

// Route pour récupérer un client par ID
router.get('/:id', clientController.getClientById);

// Route pour créer un nouveau client
router.post('/', clientController.createClient);

// Route pour mettre à jour un client par ID
router.put('/:id',isClient, clientController.updateClient);

// Route pour supprimer un client par ID
router.delete('/:id',isClient, clientController.deleteClient);




router.get('/profile', isClient, clientController.getClientProfile);




router.post('/login', clientController.login);

module.exports = router;