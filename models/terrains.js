const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require("../database.js");

const Terrain = sequelize.define('terrain', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(50)
  },
  description: {
    type: Sequelize.STRING(255)
  },
  location: {
    type: Sequelize.STRING(100)
  },
  image: {
    type: Sequelize.STRING(100)
  }
}, {
  tableName: 'terrains'
});

module.exports = Terrain;
