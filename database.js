const { Sequelize } = require('sequelize');
require('dotenv').config();
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, './development.sqlite') // Specify the desired database file path
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });
module.exports = sequelize;
