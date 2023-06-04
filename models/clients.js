/*const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require("../database.js");

const Client = sequelize.define('client', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nom: {
    type: Sequelize.STRING(50)
  },
  prenom: {
    type: Sequelize.STRING(50)
  },
  adresse: {
    type: Sequelize.STRING(200)
  },
  email: {
    type: Sequelize.STRING(100)
  },
  telephone: {
    type: Sequelize.STRING(20)
  },
  numero_permis: {
    type: Sequelize.STRING(20)
  },
  mot_de_passe: {
    type: Sequelize.STRING(100)
  },
  role: {
    type: Sequelize.STRING(20), // Add a 'role' field to determine the user's role
    defaultValue: 'client' // Set the default role to 'client' for clients
  }
}, {
  tableName: 'clients'
});

Client.prototype.verifyPassword = async function(password) {
  // Compare the provided password with the stored password hash
  const match = await bcrypt.compare(password, this.mot_de_passe);
  console.log(password, this.mot_de_passe, match);
  return match;
};


module.exports = Client;
*/

const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require("../database.js");

const Client = sequelize.define('client', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nom: {
    type: Sequelize.STRING(50)
  },
  prenom: {
    type: Sequelize.STRING(50)
  },
  adresse: {
    type: Sequelize.STRING(200)
  },
  email: {
    type: Sequelize.STRING(100)
  },
  telephone: {
    type: Sequelize.STRING(20)
  },
  numero_permis: {
    type: Sequelize.STRING(20)
  },
  mot_de_passe: {
    type: Sequelize.STRING(100)
  },
  role: {
    type: Sequelize.STRING(20), // Add a 'role' field to determine the user's role
    defaultValue: 'client' // Set the default role to 'client' for clients
  }
}, {
  tableName: 'clients'
});

Client.prototype.verifyPassword = async function(password) {
  // Compare the provided password with the stored password hash
  const match = await bcrypt.compare(password, this.mot_de_passe);
  console.log(password, this.mot_de_passe, match);
  return match;
};


module.exports = Client;
