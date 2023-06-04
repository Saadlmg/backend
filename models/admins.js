/*const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js");

const Admin = sequelize.define('admin', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: Sequelize.STRING(100)
  },
  prenom: {
    type: Sequelize.STRING(100)
  },
  email: {
    type: Sequelize.STRING(100)
  },
  mot_de_passe: {
    type: Sequelize.STRING(100)
  },
  role: {
    type: Sequelize.STRING(20), // Add a 'role' field to determine the user's role
    defaultValue: 'admin' // Set the default role to 'admin' for admins
  }
}, {
  tableName: 'admins'
});

module.exports = Admin;
*/

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js");
const bcrypt = require('bcrypt');

const Admin = sequelize.define('admin', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: Sequelize.STRING(100)
  },
  prenom: {
    type: Sequelize.STRING(100)
  },
  email: {
    type: Sequelize.STRING(100)
  },
  mot_de_passe: {
    type: Sequelize.STRING(100)
  },
  role: {
    type: Sequelize.STRING(20), // Add a 'role' field to determine the user's role
    defaultValue: 'admin' // Set the default role to 'admin' for admins
  }
}, {
  tableName: 'admins'
});


Admin.prototype.verifyPassword = async function(password) {
  // Compare the provided password with the stored password hash
  const match = await bcrypt.compare(password, this.mot_de_passe);
  console.log(password, this.mot_de_passe, match);
  return match;
};

module.exports = Admin;
