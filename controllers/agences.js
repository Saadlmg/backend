/*const Agence = require('../models/agences.js');

// Créer une nouvelle agence
exports.createAgence = async (req, res) => {
  try {
    const { nom, adresse, email, telephone, heures_ouverture, ville, pays } = req.body;
    const agence = await Agence.create({ nom, adresse, email, telephone, heures_ouverture, ville, pays });
    res.status(201).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'agence' });
  }
};

// Obtenir la liste de toutes les agences
exports.getAllAgences = async (req, res) => {
  try {
    const agences = await Agence.findAll();
    res.status(200).json(agences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des agences' });
  }
};

// Obtenir les détails d'une agence spécifique
exports.getAgenceById = async (req, res) => {
  try {
    const { id } = req.params;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    res.status(200).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'agence' });
  }
};

// Mettre à jour les informations d'une agence spécifique
exports.updateAgence = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, adresse, email, telephone, heures_ouverture, ville, pays } = req.body;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    await agence.update({ nom, adresse, email, telephone, heures_ouverture, ville, pays });
    res.status(200).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'agence' });
  }
};

// Supprimer une agence spécifique
exports.deleteAgence = async (req, res) => {
  try {
    const { id } = req.params;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    await agence.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'agence' });
  }
};
*/

const Agence = require('../models/agences.js');

// Créer une nouvelle agence
exports.createAgence = async (req, res) => {
  try {
    const { nom, adresse, email, telephone, heures_ouverture, ville, pays } = req.body;
    const agence = await Agence.create({ nom, adresse, email, telephone, heures_ouverture, ville, pays });
    res.status(201).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'agence' });
  }
};

// Obtenir la liste de toutes les agences
exports.getAllAgences = async (req, res) => {
  try {
    const agences = await Agence.findAll();
    res.status(200).json(agences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des agences' });
  }
};

// Obtenir les détails d'une agence spécifique
exports.getAgenceById = async (req, res) => {
  try {
    const { id } = req.params;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    res.status(200).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'agence' });
  }
};

// Mettre à jour les informations d'une agence spécifique
exports.updateAgence = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, adresse, email, telephone, heures_ouverture, ville, pays } = req.body;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    await agence.update({ nom, adresse, email, telephone, heures_ouverture, ville, pays });
    res.status(200).json(agence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'agence' });
  }
};

// Supprimer une agence spécifique
exports.deleteAgence = async (req, res) => {
  try {
    const { id } = req.params;
    const agence = await Agence.findByPk(id);
    if (!agence) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }
    await agence.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'agence' });
  }
};
