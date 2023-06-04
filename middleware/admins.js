/*const { body, param, validationResult } = require('express-validator');

// Middleware de validation pour la création d'un nouvel admin
const validateCreateAdmin = [
  body('nom').notEmpty().withMessage('Le nom est obligatoire.'),
  body('prenom').notEmpty().withMessage('Le prénom est obligatoire.'),
  body('email').notEmpty().withMessage('L\'email est obligatoire.').isEmail().withMessage('L\'email doit être valide.'),
  body('mot_de_passe').notEmpty().withMessage('Le mot de passe est obligatoire.').isLength({ min: 6 }).withMessage('Le mot de passe doit faire au moins 6 caractères.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware de validation pour la mise à jour d'un admin existant
const validateUpdateAdmin = [
  param('id').isNumeric().withMessage('L\'ID de l\'admin doit être un nombre.'),
  body('nom').notEmpty().withMessage('Le nom est obligatoire.'),
  body('prenom').notEmpty().withMessage('Le prénom est obligatoire.'),
  body('email').notEmpty().withMessage('L\'email est obligatoire.').isEmail().withMessage('L\'email doit être valide.'),
  body('mot_de_passe').notEmpty().withMessage('Le mot de passe est obligatoire.').isLength({ min: 6 }).withMessage('Le mot de passe doit faire au moins 6 caractères.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


module.exports = createAdmin;

*/

const { body, param, validationResult } = require('express-validator');

// Middleware de validation pour la création d'un nouvel admin
const validateCreateAdmin = [
  body('nom').notEmpty().withMessage('Le nom est obligatoire.'),
  body('prenom').notEmpty().withMessage('Le prénom est obligatoire.'),
  body('email').notEmpty().withMessage('L\'email est obligatoire.').isEmail().withMessage('L\'email doit être valide.'),
  body('mot_de_passe').notEmpty().withMessage('Le mot de passe est obligatoire.').isLength({ min: 6 }).withMessage('Le mot de passe doit faire au moins 6 caractères.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware de validation pour la mise à jour d'un admin existant
const validateUpdateAdmin = [
  param('id').isNumeric().withMessage('L\'ID de l\'admin doit être un nombre.'),
  body('nom').notEmpty().withMessage('Le nom est obligatoire.'),
  body('prenom').notEmpty().withMessage('Le prénom est obligatoire.'),
  body('email').notEmpty().withMessage('L\'email est obligatoire.').isEmail().withMessage('L\'email doit être valide.'),
  body('mot_de_passe').notEmpty().withMessage('Le mot de passe est obligatoire.').isLength({ min: 6 }).withMessage('Le mot de passe doit faire au moins 6 caractères.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


module.exports = createAdmin;