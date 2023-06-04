/*const Admin = require('../models/admins.js');


// Méthode pour créer un nouvel admin
const createAdmin = async (req, res) => {
  try {
    const { nom, prenom, email, mot_de_passe } = req.body; // Extraire les données du corps de la requête

    // Créer un nouvel admin dans la base de données
    const admin = await Admin.create({ nom, prenom, email, mot_de_passe });

    // Répondre avec le nouvel admin créé
    res.status(201).json(admin);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'admin.' });
  }
};

// Méthode pour récupérer tous les admins
const getAllAdmins = async (req, res) => {
  try {
    // Récupérer tous les admins dans la base de données
    const admins = await Admin.findAll();

    // Répondre avec la liste des admins
    res.status(200).json(admins);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des admins.' });
  }
};

// Méthode pour récupérer un admin par son ID
const getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id; // Extraire l'ID de l'admin à partir des paramètres de la requête

    // Récupérer l'admin par son ID dans la base de données
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      // Vérifier si l'admin existe
      return res.status(404).json({ message: 'Admin introuvable.' });
    }

    // Répondre avec l'admin récupéré
    res.status(200).json(admin);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'admin.' });
  }
};



const updateAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { nom, prenom, email, mot_de_passe } = req.body;

    console.log("adminId:", adminId);
    console.log("Updated data:", { nom, prenom, email, mot_de_passe });

    const admin = await Admin.findOne({ where: { id: adminId } });

    if (!admin) {
      console.log("Admin not found.");
      return res.status(404).json({ message: 'Admin introuvable.' });
    }

    const updatedAdmin = await admin.update({ nom, prenom, email, mot_de_passe });

    console.log("Updated admin:", updatedAdmin);

    res.status(200).json(updatedAdmin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'admin.' });
  }
};


// Méthode pour supprimer un admin par son ID
const deleteAdminById = async (req, res) => {
try {
  const adminId = req.params.id; // Extraire l'ID de l'admin à partir des paramètres de la requête

  // Supprimer l'admin par son ID dans la base de données
  const rowsAffected = await Admin.destroy({ where: { id: adminId } });

  if (rowsAffected === 0) {
    // Vérifier si l'admin existe
    return res.status(404).json({ message: 'Admin introuvable.' });
  }

  // Répondre avec un message de succès
  res.status(204).json();
} catch (err) {
  // Gérer les erreurs
  console.error(err);
  res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'admin.' });
}
};

module.exports = {
createAdmin,
getAllAdmins,
getAdminById,
updateAdminById,
deleteAdminById
};
*/

const Admin = require('../models/admins.js');


// Méthode pour créer un nouvel admin
const createAdmin = async (req, res) => {
  try {
    const { nom, prenom, email, mot_de_passe } = req.body; // Extraire les données du corps de la requête

    // Créer un nouvel admin dans la base de données
    const admin = await Admin.create({ nom, prenom, email, mot_de_passe });

    // Répondre avec le nouvel admin créé
    res.status(201).json(admin);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'admin.' });
  }
};

// Méthode pour récupérer tous les admins
const getAllAdmins = async (req, res) => {
  try {
    // Récupérer tous les admins dans la base de données
    const admins = await Admin.findAll();

    // Répondre avec la liste des admins
    res.status(200).json(admins);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des admins.' });
  }
};

// Méthode pour récupérer un admin par son ID
const getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id; // Extraire l'ID de l'admin à partir des paramètres de la requête

    // Récupérer l'admin par son ID dans la base de données
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      // Vérifier si l'admin existe
      return res.status(404).json({ message: 'Admin introuvable.' });
    }

    // Répondre avec l'admin récupéré
    res.status(200).json(admin);
  } catch (err) {
    // Gérer les erreurs
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'admin.' });
  }
};



const updateAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const { nom, prenom, email, mot_de_passe } = req.body;

    console.log("adminId:", adminId);
    console.log("Updated data:", { nom, prenom, email, mot_de_passe });

    const admin = await Admin.findOne({ where: { id: adminId } });

    if (!admin) {
      console.log("Admin not found.");
      return res.status(404).json({ message: 'Admin introuvable.' });
    }

    const updatedAdmin = await admin.update({ nom, prenom, email, mot_de_passe });

    console.log("Updated admin:", updatedAdmin);

    res.status(200).json(updatedAdmin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'admin.' });
  }
};


// Méthode pour supprimer un admin par son ID
const deleteAdminById = async (req, res) => {
try {
  const adminId = req.params.id; // Extraire l'ID de l'admin à partir des paramètres de la requête

  // Supprimer l'admin par son ID dans la base de données
  const rowsAffected = await Admin.destroy({ where: { id: adminId } });

  if (rowsAffected === 0) {
    // Vérifier si l'admin existe
    return res.status(404).json({ message: 'Admin introuvable.' });
  }

  // Répondre avec un message de succès
  res.status(204).json();
} catch (err) {
  // Gérer les erreurs
  console.error(err);
  res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'admin.' });
}
};

module.exports = {
createAdmin,
getAllAdmins,
getAdminById,
updateAdminById,
deleteAdminById
};


