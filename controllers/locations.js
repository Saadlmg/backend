/*const Location = require('../models/locations.js');
const Vehicule = require('../models/vehicules.js');
const Client = require('../models/clients.js');

// Créer une nouvelle location
exports.createLocation = async (req, res) => {
  try {
    const { date_debut, date_fin, cout_total, vehicule_id, client_id } = req.body;
    const location = await Location.create({ date_debut, date_fin, cout_total, vehicule_id, client_id });
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la location' });
  }
};

// Obtenir la liste de toutes les locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({
      include: [{ model: Vehicule }, { model: Client }]
    });
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des locations' });
  }
};

// Obtenir les détails d'une location spécifique
exports.getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id, {
      include: [{ model: Vehicule }, { model: Client }]
    });
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la location' });
  }
};

// Mettre à jour les informations d'une location spécifique
exports.updateLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { date_debut, date_fin, cout_total, vehicule_id, client_id } = req.body;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    await location.update({ date_debut, date_fin, cout_total, vehicule_id, client_id });
    res.status(200).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la location' });
  }
};

// Supprimer une location spécifique
exports.deleteLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    await location.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la location' });
  }
};
*/

const Location = require('../models/locations.js');
const Vehicule = require('../models/vehicules.js');
const Client = require('../models/clients.js');

// Créer une nouvelle location
exports.createLocation = async (req, res) => {
  try {
    const { date_debut, date_fin, cout_total, vehicule_id, client_id } = req.body;
    const location = await Location.create({ date_debut, date_fin, cout_total, vehicule_id, client_id });
    res.status(201).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la location' });
  }
};

// Obtenir la liste de toutes les locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({
      include: [{ model: Vehicule }, { model: Client }]
    });
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des locations' });
  }
};

// Obtenir les détails d'une location spécifique
exports.getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id, {
      include: [{ model: Vehicule }, { model: Client }]
    });
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    res.status(200).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la location' });
  }
};

// Mettre à jour les informations d'une location spécifique
exports.updateLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const { date_debut, date_fin, cout_total, vehicule_id, client_id } = req.body;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    await location.update({ date_debut, date_fin, cout_total, vehicule_id, client_id });
    res.status(200).json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la location' });
  }
};

// Supprimer une location spécifique
exports.deleteLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ message: 'Location non trouvée' });
    }
    await location.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la location' });
  }
};

// Get all locations of a client by their ID
exports.getClientLocations = async (req, res) => {
  try {
    const client_id = req.params.id;  // Get client id from request params
    const locations = await Location.findAll({
      where: { client_id: client_id },  // Filter locations by client id
      include: [Vehicule, Client],  // Include associated Vehicule and Client data
    });
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des locations' });
  }
};
