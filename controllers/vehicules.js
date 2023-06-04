/*const Vehicule = require('../models/vehicules.js');

// Créer un nouveau véhicule
exports.createVehicule = async (req, res) => {
  try {
    const { type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays } = req.body;
    const vehicule = await Vehicule.create({ type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays });
    res.status(201).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du véhicule' });
  }
};

// Obtenir la liste de tous les véhicules
exports.getAllVehicules = async (req, res) => {
  try {
    const vehicules = await Vehicule.findAll();
    res.status(200).json(vehicules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des véhicules' });
  }
};

// Obtenir les détails d'un véhicule spécifique
exports.getVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du véhicule' });
  }
};

// Mettre à jour les informations d'un véhicule spécifique
exports.updateVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays } = req.body;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.update({ type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays });
    res.status(200).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du véhicule' });
  }
};

// Supprimer un véhicule spécifique
exports.deleteVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du véhicule' });
  }
};
*/

const Vehicule = require('../models/vehicules.js');

// Créer un nouveau véhicule
exports.createVehicule = async (req, res) => {
  try {
    const { type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays } = req.body;
    const vehicule = await Vehicule.create({ type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays });
    res.status(201).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du véhicule' });
  }
};

// Obtenir la liste de tous les véhicules
exports.getAllVehicules = async (req, res) => {
  try {
    const vehicules = await Vehicule.findAll();
    res.status(200).json(vehicules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des véhicules' });
  }
};

// Obtenir les détails d'un véhicule spécifique
exports.getVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du véhicule' });
  }
};

// Mettre à jour les informations d'un véhicule spécifique
exports.updateVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays } = req.body;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.update({ type, marque, modele, kilometrage, etat, cout_location_jour, ville, pays });
    res.status(200).json(vehicule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du véhicule' });
  }
};

// Supprimer un véhicule spécifique
exports.deleteVehiculeById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicule = await Vehicule.findByPk(id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    await vehicule.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du véhicule' });
  }
};
