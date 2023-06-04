/*const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")

const Vehicule = sequelize.define('vehicule', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING(50)
  },
  marque: {
    type: Sequelize.STRING(50)
  },
  modele: {
    type: Sequelize.STRING(50)
  },
  kilometrage: {
    type: Sequelize.INTEGER
  },
  etat: {
    type: Sequelize.STRING(50)
  },
  cout_location_jour: {
    type: Sequelize.DECIMAL(10, 2)
  },
  ville: {
    type: Sequelize.STRING(50)
  },
  pays: {
    type: Sequelize.STRING(50)
  }
}, {
  tableName: 'vehicules'
});

module.exports = Vehicule;
*/

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")

const Vehicule = sequelize.define('vehicule', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING(50)
  },
  marque: {
    type: Sequelize.STRING(50)
  },
  modele: {
    type: Sequelize.STRING(50)
  },
  kilometrage: {
    type: Sequelize.INTEGER
  },
  etat: {
    type: Sequelize.STRING(50)
  },
  cout_location_jour: {
    type: Sequelize.DECIMAL(10, 2)
  },
  ville: {
    type: Sequelize.STRING(50)
  },
  pays: {
    type: Sequelize.STRING(50)
  },
  image: {
    type: Sequelize.STRING(50)
  }
}, {
  tableName: 'vehicules'
});

module.exports = Vehicule;
