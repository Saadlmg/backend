/*const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")
const Client = require('./clients.js');
const Vehicule = require('./vehicules.js');

const Reservation = sequelize.define('reservation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date_debut: {
    type: Sequelize.DATE
  },
  date_fin: {
    type: Sequelize.DATE
  },
  vehicule_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Vehicule,
      key: 'id'
    }
  },
  client_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Client,
      key: 'id'
    }
  }
}, {
  tableName: 'reservations'
});

Reservation.belongsTo(Vehicule, { foreignKey: 'vehicule_id' }); // Relation avec la table "vehicules"
Reservation.belongsTo(Client, { foreignKey: 'client_id' }); // Relation avec la table "clients"

module.exports = Reservation;
*/

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js")
const Client = require('./clients.js');
const Vehicule = require('./vehicules.js');

const Reservation = sequelize.define('reservation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date_debut: {
    type: Sequelize.DATE
  },
  date_fin: {
    type: Sequelize.DATE
  },
  vehicule_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Vehicule,
      key: 'id'
    }
  },
  client_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Client,
      key: 'id'
    }
  }
}, {
  tableName: 'reservations'
});

Reservation.belongsTo(Vehicule, { foreignKey: 'vehicule_id' }); // Relation avec la table "vehicules"
Reservation.belongsTo(Client, { foreignKey: 'client_id' }); // Relation avec la table "clients"

module.exports = Reservation;
