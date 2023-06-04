/*const Reservation = require('../models/reservations.js');
const Vehicule = require('../models/vehicules.js');
const Client = require('../models/clients.js');

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
  try {
    const { date_debut, date_fin, vehicule_id, client_id } = req.body;
    const reservation = await Reservation.create({ date_debut, date_fin, vehicule_id, client_id });
    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
};

// Obtenir la liste de toutes les réservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({ include: [Vehicule, Client] });
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations' });
  }
};

// Obtenir les détails d'une réservation spécifique
exports.getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByPk(id, { include: [Vehicule, Client] });
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la réservation' });
  }
};

// Mettre à jour les informations d'une réservation spécifique
exports.updateReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { date_debut, date_fin, vehicule_id, client_id } = req.body;
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.update({ date_debut, date_fin, vehicule_id, client_id });
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation' });
  }
};

// Supprimer une réservation spécifique
exports.deleteReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la réservation' });
  }
};
*/

const Reservation = require('../models/reservations.js');
const Vehicule = require('../models/vehicules.js');
const Client = require('../models/clients.js');

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
  try {
    const { date_debut, date_fin, vehicule_id, client_id } = req.body;
    const reservation = await Reservation.create({ date_debut, date_fin, vehicule_id, client_id });
    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
};

// Obtenir la liste de toutes les réservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({ include: [Vehicule, Client] });
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations' });
  }
};

// Obtenir les détails d'une réservation spécifique
exports.getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByPk(id, { include: [Vehicule, Client] });
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la réservation' });
  }
};

// Mettre à jour les informations d'une réservation spécifique
exports.updateReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { date_debut, date_fin, vehicule_id, client_id } = req.body;
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.update({ date_debut, date_fin, vehicule_id, client_id });
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation' });
  }
};

// Supprimer une réservation spécifique
exports.deleteReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByPk(id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    await reservation.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la réservation' });
  }
};
