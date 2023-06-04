/*const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")
const Location = require('./locations.js'); 

const Paiement = sequelize.define('paiement', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: Sequelize.INTEGER
  },
  montant: {
    type: Sequelize.DECIMAL(10, 2)
  },
  date_paiement: {
    type: Sequelize.DATE
  },
  mode_paiement: {
    type: Sequelize.STRING(50)
  },
  numero_carte: {
    type: Sequelize.STRING(16)
  },
  nom_titulaire_carte: {
    type: Sequelize.STRING(100)
  },
  date_expiration_carte: {
    type: Sequelize.DATE
  },
  code_verification_carte: {
    type: Sequelize.STRING(3)
  }
}, {
  tableName: 'paiements'
});

Paiement.belongsTo(Location, { foreignKey: 'location_id' }); // Relation avec la table "locations"

module.exports = Paiement;
*/

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")
const Location = require('./locations.js'); 

const Paiement = sequelize.define('paiement', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: Sequelize.INTEGER
  },
  montant: {
    type: Sequelize.DECIMAL(10, 2)
  },
  date_paiement: {
    type: Sequelize.DATE
  },
  mode_paiement: {
    type: Sequelize.STRING(50)
  },
  numero_carte: {
    type: Sequelize.STRING(16)
  },
  nom_titulaire_carte: {
    type: Sequelize.STRING(100)
  },
  date_expiration_carte: {
    type: Sequelize.DATE
  },
  code_verification_carte: {
    type: Sequelize.STRING(3)
  }
}, {
  tableName: 'paiements'
});

Paiement.belongsTo(Location, { foreignKey: 'location_id' }); // Relation avec la table "locations"

module.exports = Paiement;
