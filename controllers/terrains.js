const Terrain = require('../models/terrains.js');

// Créer un nouveau terrain
exports.createTerrain = async (req, res) => {
  try {
    const { name, description, location, image } = req.body;
    const terrain = await Terrain.create({ name, description, location, image });
    res.status(201).json(terrain);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du terrain' });
  }
};

// Obtenir la liste de tous les terrains
exports.getAllTerrains = async (req, res) => {
  try {
    const terrains = await Terrain.findAll();
    res.status(200).json(terrains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des terrains' });
  }
};

// Obtenir les détails d'un terrain spécifique
exports.getTerrainById = async (req, res) => {
  try {
    const { id } = req.params;
    const terrain = await Terrain.findByPk(id);
    if (!terrain) {
      return res.status(404).json({ message: 'Terrain non trouvé' });
    }
    res.status(200).json(terrain);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du terrain' });
  }
};

// Mettre à jour les informations d'un terrain spécifique
exports.updateTerrainById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, location, image } = req.body;
    const terrain = await Terrain.findByPk(id);
    if (!terrain) {
      return res.status(404).json({ message: 'Terrain non trouvé' });
    }
    await terrain.update({ name, description, location, image });
    res.status(200).json(terrain);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du terrain' });
  }
};

// Supprimer un terrain spécifique
exports.deleteTerrainById = async (req, res) => {
  try {
    const { id } = req.params;
    const terrain = await Terrain.findByPk(id);
    if (!terrain) {
      return res.status(404).json({ message: 'Terrain non trouvé' });
    }
    await terrain.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du terrain' });
  }
};
