/*const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');
const init = require('./initialize.js');
const path = require('path')
const app = express();

const adminsRoutes = require('./routeur/admins.js');
const agencesRoutes = require('./routeur/agences');
const clientsRoutes = require('./routeur/clients');
const locationsRoutes = require('./routeur/locations');
const paiementsRoutes = require('./routeur/paiements');
const reservationsRoutes = require('./routeur/reservations');
const vehiculesRoutes = require('./routeur/vehicules');

init();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/admins', adminsRoutes);
app.use('/api/agences', agencesRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/paiements', paiementsRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/vehicules', vehiculesRoutes);


const buildPath = path.join(__dirname, 'build')
app.use(express.static(buildPath))
// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
*/


const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');
const init = require('./initialize.js');
const path = require('path');
const app = express();

const adminsRoutes = require('./routeur/admins.js');
const agencesRoutes = require('./routeur/agences');
const clientsRoutes = require('./routeur/clients');
const locationsRoutes = require('./routeur/locations');
const paiementsRoutes = require('./routeur/paiements');
const reservationsRoutes = require('./routeur/reservations');
const vehiculesRoutes = require('./routeur/vehicules');
const terrainsRoutes = require('./routeur/terrains'); // Import des routes pour les terrains


init();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/admins', adminsRoutes);
app.use('/api/agences', agencesRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/paiements', paiementsRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/vehicules', vehiculesRoutes);
app.use('/api/terrains', terrainsRoutes); // Utilisation des routes pour les terrains

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));
// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
