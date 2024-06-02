/*const Client = require('../models/clients.js');
const bcrypt = require('bcrypt');
// Créer un nouveau client
exports.createClient = async (req, res) => {
  try {
    const { nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe } = req.body;
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(mot_de_passe, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    const client = await Client.create({ nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe: hashedPassword });
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du client' });
  }
};

// Obtenir la liste de tous les clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des clients' });
  }
};

// Obtenir les détails d'un client spécifique
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du client' });
  }
};

// Mettre à jour les informations d'un client spécifique
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe } = req.body;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    await client.update({ nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe });
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du client' });
  }
};

// Supprimer un client spécifique
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    await client.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du client' });
  }
};


// clients.js (controller)

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');


// Generate JWT token
const generateToken = (client) => {
  const payload = {
    id: client.id,
    email: client.email,
    role: client.role,
  };
  const secretKey = 'your-secret-key'; // Replace with your own secret key
  const options = {
    expiresIn: '1h', // Set the expiration time for the token
  };

  return jwt.sign(payload, secretKey, options);
};
// Login as a client
// Login as a client
exports.loginClient = (req, res, next) => {
  passport.authenticate('client-local', (err, client, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during client login' });
    }
    if (!client) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    req.logIn(client, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error during client login' });
      }
      
      // Generate JWT token for client authentication
      const token = await generateToken(client);

      return res.status(200).json({ message: 'Client logged in successfully', token });
    });
  })(req, res, next);
};

*/

const Client = require('../models/clients.js');
const Admin = require("../models/admins.js");
async function determineUserType(email) {
  const client = await Client.findOne({ where: { email } });
  if (client !== null) {
    return 'client';
  }

  const admin = await Admin.findOne({ where: { email } });
  if (admin !== null) {
    return 'admin';
  }

  throw new Error('No user found with this email');
}

const bcrypt = require('bcrypt');




// Créer un nouveau client
exports.createClient = async (req, res) => {
  try {
    const { nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe } = req.body;
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(mot_de_passe, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    const client = await Client.create({ nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe: hashedPassword });
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du client' });
  }
};

// Obtenir la liste de tous les clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des clients' });
  }
};

// Obtenir les détails d'un client spécifique
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du client' });
  }
};

// Mettre à jour les informations d'un client spécifique
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe } = req.body;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    await client.update({ nom, prenom, adresse, email, telephone, numero_permis, mot_de_passe });
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du client' });
  }
};

// Supprimer un client spécifique
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: 'Client non trouvé' });
    }
    await client.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du client' });
  }
};


// clients.js (controller)
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (client) => {
  const payload = {
    id: client.id,
    email: client.email,
    role: client.role,
  };
  const secretKey = 'your-secret-key'; // Replace with your own secret key
  const options = {
    expiresIn: '1h', // Set the expiration time for the token
  };

  return jwt.sign(payload, secretKey, options);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  determineUserType(email, password)
    .then(userType => {
      passport.authenticate(`${userType}-local`, (err, user, info) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: `Error during ${userType} login` });
        }
        if (!user) {
          return res.status(401).json({ message: 'Incorrect email or password' });
        }
        req.logIn(user, async (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: `Error during ${userType} login` });
          }
          
          // Generate JWT token for user authentication
          const token = await generateToken(user);

          return res.status(200).json({
            message: `${userType} logged in successfully`, 
            token, 
            email: user.email,
            role: user.role, // include this in the response
            id: user.id
          });
        });
      })(req, res, next);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Error determining user type' });
    });
};


// Get the profile of the logged-in client
exports.getClientProfile = async (req, res) => {
  try {
    // Get the client's id from the request object
    const id = req.user.id;

    // Find the client by id
    const client = await Client.findByPk(id);

    // If the client could not be found, return a 404 error
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // If the client was found, return their information
    res.status(200).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving client profile' });
  }
};
