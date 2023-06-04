/*const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")

const Agence = sequelize.define('agence', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
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
  heures_ouverture: {
    type: Sequelize.STRING(100)
  },
  ville: {
    type: Sequelize.STRING(50)
  },
  pays: {
    type: Sequelize.STRING(50)
  }
}, {
  tableName: 'agences'
});

module.exports = Agence;
*/

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")

const Agence = sequelize.define('agence', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
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
  heures_ouverture: {
    type: Sequelize.STRING(100)
  },
  ville: {
    type: Sequelize.STRING(50)
  },
  pays: {
    type: Sequelize.STRING(50)
  }
}, {
  tableName: 'agences'
});

module.exports = Agence;
