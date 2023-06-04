/*const { body, validationResult } = require('express-validator');

// Fonction pour créer un nouveau client
const createClient = async (req, res) => {
  // Ajouter la validation des données du client avec Express Validator
  await body('nom').matches(/^[^0-9]+$/).withMessage('Le nom ne doit pas contenir de chiffres').notEmpty().withMessage('Le nom est requis');
  await body('prenom').matches(/^[^0-9]+$/).withMessage('Le prénom ne doit pas contenir de chiffres').notEmpty().withMessage('Le prénom est requis');
  await body('ville').matches(/^[^0-9]+$/).withMessage('La ville ne doit pas contenir de chiffres').notEmpty().withMessage('La ville est requise');
  await body('pays').matches(/^[^0-9]+$/).withMessage('Le pays ne doit pas contenir de chiffres').notEmpty().withMessage('Le pays est requis');
  await body('email').isEmail().withMessage("L'email doit être une adresse email valide");
  await body('email').normalizeEmail();
  await body('motDePasse').notEmpty().withMessage('Le mot de passe est requis').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères');
  await body('telephone').isNumeric().withMessage('Le numéro de téléphone doit être numérique').isLength({ min: 10, max: 10 }).withMessage('Le numéro de téléphone doit contenir 10 chiffres').notEmpty().withMessage('Le numéro de téléphone est requis');
  await body('numero_permis').matches(/^[0-9]+$/).withMessage('Le numéro de permis ne doit contenir que des chiffres').notEmpty().withMessage('Le numéro de permis est requis');

  const errors = validationResult(req); // Vérifier les erreurs de validation
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Renvoyer les erreurs de validation en tant que réponse en format JSON
  }

  const { nom, prenom, email, ville, pays, motDePasse, telephone, numero_permis } = req.body; // Récupérer les données du client depuis le corps de la requête
  try {
    const client = await Client.create({ // Utiliser la méthode create() du modèle Client pour créer un nouveau client
      nom,
      prenom,
      email,
      ville,
      pays,
      motDePasse,
      telephone,
      numero_permis
    });
    res.status(201).json(client); // Renvoyer le client créé en tant que réponse en format JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la création du client' });
  }
};

module.exports = createClient;
*/

const { body, validationResult } = require('express-validator');

// Fonction pour créer un nouveau client
const createClient = async (req, res) => {
  // Ajouter la validation des données du client avec Express Validator
  await body('nom').matches(/^[^0-9]+$/).withMessage('Le nom ne doit pas contenir de chiffres').notEmpty().withMessage('Le nom est requis');
  await body('prenom').matches(/^[^0-9]+$/).withMessage('Le prénom ne doit pas contenir de chiffres').notEmpty().withMessage('Le prénom est requis');
  await body('ville').matches(/^[^0-9]+$/).withMessage('La ville ne doit pas contenir de chiffres').notEmpty().withMessage('La ville est requise');
  await body('pays').matches(/^[^0-9]+$/).withMessage('Le pays ne doit pas contenir de chiffres').notEmpty().withMessage('Le pays est requis');
  await body('email').isEmail().withMessage("L'email doit être une adresse email valide");
  await body('email').normalizeEmail();
  await body('motDePasse').notEmpty().withMessage('Le mot de passe est requis').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères');
  await body('telephone').isNumeric().withMessage('Le numéro de téléphone doit être numérique').isLength({ min: 10, max: 10 }).withMessage('Le numéro de téléphone doit contenir 10 chiffres').notEmpty().withMessage('Le numéro de téléphone est requis');
  await body('numero_permis').matches(/^[0-9]+$/).withMessage('Le numéro de permis ne doit contenir que des chiffres').notEmpty().withMessage('Le numéro de permis est requis');

  const errors = validationResult(req); // Vérifier les erreurs de validation
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Renvoyer les erreurs de validation en tant que réponse en format JSON
  }

  const { nom, prenom, email, ville, pays, motDePasse, telephone, numero_permis } = req.body; // Récupérer les données du client depuis le corps de la requête
  try {
    const client = await Client.create({ // Utiliser la méthode create() du modèle Client pour créer un nouveau client
      nom,
      prenom,
      email,
      ville,
      pays,
      motDePasse,
      telephone,
      numero_permis
    });
    res.status(201).json(client); // Renvoyer le client créé en tant que réponse en format JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la création du client' });
  }
};

module.exports = createClient;
