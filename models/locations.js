/*const { DataTypes, Sequelize } = require('sequelize');
const Vehicule = require('./vehicules.js');
const Client = require('./clients.js'); 
const sequelize = require("../database.js")

const Location = sequelize.define('location', {
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
  cout_total: {
    type: Sequelize.DECIMAL(10, 2)
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
  tableName: 'locations'
});

Location.belongsTo(Vehicule, { foreignKey: 'vehicule_id' }); // Relation avec la table "vehicules"
Location.belongsTo(Client, { foreignKey: 'client_id' }); // Relation avec la table "clients"

module.exports = Location;
*/

const { DataTypes, Sequelize } = require('sequelize');
const Vehicule = require('./vehicules.js');
const Client = require('./clients.js'); 
const sequelize = require("../database.js")

const Location = sequelize.define('location', {
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
  cout_total: {
    type: Sequelize.DECIMAL(10, 2)
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
  tableName: 'locations'
});

Location.belongsTo(Vehicule, { foreignKey: 'vehicule_id' }); // Relation avec la table "vehicules"
Location.belongsTo(Client, { foreignKey: 'client_id' }); // Relation avec la table "clients"

module.exports = Location;
