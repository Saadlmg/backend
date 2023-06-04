/*const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservations');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer une nouvelle réservation
router.post('/',isClient, reservationController.createReservation);

// Route pour obtenir la liste de toutes les réservations
router.get('/',isAdmin, reservationController.getAllReservations);

// Route pour obtenir les détails d'une réservation spécifique
router.get('/:id',isClient, reservationController.getReservationById);

// Route pour mettre à jour les informations d'une réservation spécifique
router.put('/:id',isAdmin, reservationController.updateReservationById);

// Route pour supprimer une réservation spécifique
router.delete('/:id',isAdmin, reservationController.deleteReservationById);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservations');
const { isAdmin, isClient } = require('../middleware/auth');

// Route pour créer une nouvelle réservation
router.post('/',isClient, reservationController.createReservation);

// Route pour obtenir la liste de toutes les réservations
router.get('/',isAdmin, reservationController.getAllReservations);

// Route pour obtenir les détails d'une réservation spécifique
router.get('/:id',isClient, reservationController.getReservationById);

// Route pour mettre à jour les informations d'une réservation spécifique
router.put('/:id',isAdmin, reservationController.updateReservationById);

// Route pour supprimer une réservation spécifique
router.delete('/:id',isAdmin, reservationController.deleteReservationById);

module.exports = router;
