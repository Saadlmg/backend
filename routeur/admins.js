/*const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admins');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer un nouvel admin
router.post('/',isAdmin, adminController.createAdmin);

// Route pour récupérer tous les admins
router.get('/',isAdmin, adminController.getAllAdmins);

// Route pour récupérer un admin par son ID
router.get('/:id',isAdmin, adminController.getAdminById);

// Route pour mettre à jour un admin par son ID
router.put('/:id',isAdmin, adminController.updateAdminById);

// Route pour supprimer un admin par son ID
router.delete('/:id',isAdmin, adminController.deleteAdminById);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admins');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer un nouvel admin
router.post('/',isAdmin, adminController.createAdmin);

// Route pour récupérer tous les admins
router.get('/',isAdmin, adminController.getAllAdmins);

// Route pour récupérer un admin par son ID
router.get('/:id',isAdmin, adminController.getAdminById);

// Route pour mettre à jour un admin par son ID
router.put('/:id',isAdmin, adminController.updateAdminById);

// Route pour supprimer un admin par son ID
router.delete('/:id',isAdmin, adminController.deleteAdminById);

module.exports = router;
