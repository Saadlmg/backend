/*const Paiement = require('../models/paiements.js');
const Location = require('../models/locations.js');

// Créer un nouveau paiement
exports.createPaiement = async (req, res) => {
  try {
    const { location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte } = req.body;
    const paiement = await Paiement.create({ location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte });
    res.status(201).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du paiement' });
  }
};

// Obtenir la liste de tous les paiements
exports.getAllPaiements = async (req, res) => {
  try {
    const paiements = await Paiement.findAll();
    res.status(200).json(paiements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des paiements' });
  }
};

// Obtenir les détails d'un paiement spécifique
exports.getPaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const paiement = await Paiement.findByPk(id, {
      include: [{
        model: Location,
        attributes: ['id', 'nom', 'adresse'] // Inclure les détails de la location liée
      }]
    });
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    res.status(200).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du paiement' });
  }
};

// Mettre à jour les informations d'un paiement spécifique
exports.updatePaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const { location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte } = req.body;
    const paiement = await Paiement.findByPk(id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.update({ location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte });
    res.status(200).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du paiement' });
  }
};

// Supprimer un paiement spécifique
exports.deletePaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const paiement = await Paiement.findByPk(id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.destroy();
    res.status(200).json({ message: 'Paiement supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du paiement' });
  }
};
*/

const Paiement = require('../models/paiements.js');
const Location = require('../models/locations.js');

// Créer un nouveau paiement
exports.createPaiement = async (req, res) => {
  try {
    const { location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte } = req.body;
    const paiement = await Paiement.create({ location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte });
    res.status(201).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du paiement' });
  }
};

// Obtenir la liste de tous les paiements
exports.getAllPaiements = async (req, res) => {
  try {
    const paiements = await Paiement.findAll();
    res.status(200).json(paiements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des paiements' });
  }
};

// Obtenir les détails d'un paiement spécifique
exports.getPaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const paiement = await Paiement.findByPk(id, {
      include: [{
        model: Location,
        attributes: ['id', 'nom', 'adresse'] // Inclure les détails de la location liée
      }]
    });
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    res.status(200).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du paiement' });
  }
};

// Mettre à jour les informations d'un paiement spécifique
exports.updatePaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const { location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte } = req.body;
    const paiement = await Paiement.findByPk(id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.update({ location_id, montant, date_paiement, mode_paiement, numero_carte, nom_titulaire_carte, date_expiration_carte, code_verification_carte });
    res.status(200).json(paiement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du paiement' });
  }
};

// Supprimer un paiement spécifique
exports.deletePaiementById = async (req, res) => {
  try {
    const { id } = req.params;
    const paiement = await Paiement.findByPk(id);
    if (!paiement) {
      return res.status(404).json({ message: 'Paiement non trouvé' });
    }
    await paiement.destroy();
    res.status(200).json({ message: 'Paiement supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du paiement' });
  }
};
