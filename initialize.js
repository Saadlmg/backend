/*
const audiRS6= './image/audiRS6.jpg';
const bmwX5= './image/bmwX5.jpg';
const mercedesCClass= './image/mercedesCClass.jpg';
const teslaModelS= './image/teslaModelS.jpg';
const fordMustang= './image/fordMustang.jpg';
const volkswagenGolf= './image/volkswagenGolf.jpg';
const toyotaCamry= './image/toyotaCamry.png';
const hyundaiTucson= './image/hyundaiTucson.jpg';
const nissanRogue= './image/nissanRogue.jpg';
const chevroletImpala= './image/chevroletImpala.jpg';
const lexusES= './image/lexusES.jpg';
const subaruOutback= './image/subaruOutback.jpg';
const mazdaCX5= './image/mazdaCX5.jpg';
const kiaSoul= './image/kiaSoul.jpg';
const jeepWrangler= './image/jeepWrangler.jpg';
const fiat500= './image/fiat500.jpg';
const peugeot308= './image/peugeot308.png';
const renaultClio= './image/renaultClio.png';
const opelCorsa= './image/opelCorsa.jpg';
const seatLeon= './image/seatLeon.jpg';
const audiA4= './image/audiA4.jpg';
const peugeot1007= './image/peugeot1007.jpg';
const mercedesAMGA45= './image/mercedesAMGA45.jpg';
const bentleyContinental= './image/bentleyContinental.jpg';

const vehicles = [
    {
      id: 1,
      make: 'Audi',
      model: 'RS6',
      year: 2021,
      price: 180,
      image: audiRS6,
      kilometrage: 5000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 2,
      make: 'BMW',
      model: 'X5',
      year: 2022,
      price: 120,
      image: bmwX5,
      kilometrage: 7500,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 3,
      make: 'Mercedes',
      model: 'C-Class',
      year: 2020,
      price: 100,
      image: mercedesCClass,
      kilometrage: 2500,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 4,
      make: 'Tesla',
      model: 'Model S',
      year: 2023,
      price: 150,
      image: teslaModelS,
      kilometrage: 10000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 5,
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: 110,
      image: fordMustang,
      kilometrage: 34000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 6,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2021,
      price: 190,
      image: volkswagenGolf,
      kilometrage: 5580,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 7,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      price: 95,
      image: toyotaCamry,
      kilometrage: 35000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 8,
      make: 'Hyundai',
      model: 'Tucson',
      year: 2021,
      price: 85,
      image: hyundaiTucson,
      kilometrage: 65000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 9,
      make: 'Nissan',
      model: 'Rogue',
      year: 2022,
      price: 100,
      image: nissanRogue,
      kilometrage: 75000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 10,
      make: 'Chevrolet',
      model: 'Impala',
      year: 2020,
      price: 95,
      image: chevroletImpala,
      kilometrage: 5000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 11,
    make: 'Lexus',
    model: 'ES',
    year: 2021,
    price: 110,
    image: lexusES,
    kilometrage: 43000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 12,
    make: 'Subaru',
    model: 'Outback',
    year: 2022,
    price: 90,
    image: subaruOutback,
    kilometrage: 87000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 13,
    make: 'Mazda',
    model: 'CX-5',
    year: 2020,
    price: 100,
    image: mazdaCX5,
    kilometrage: 35000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 14,
    make: 'Kia',
    model: 'Soul',
    year: 2021,
    price: 80,
    image: kiaSoul,
    kilometrage: 95000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 15,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    price: 120,
    image: jeepWrangler,
    kilometrage: 26000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 16,
    make: 'Fiat',
    model: '500',
    year: 2020,
    price: 90,
    image: fiat500,
    kilometrage: 76000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 17,
    make: 'Peugeot',
    model: '308',
    year: 2021,
    price: 85,
    image: peugeot308,
    kilometrage: 45000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 18,
    make: 'Renault',
    model: 'Clio',
    year: 2022,
    price: 95,
    image: renaultClio,
    kilometrage: 23000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 19,
    make: 'Opel',
    model: 'Corsa',
    year: 2020,
    price: 80,
    image: opelCorsa,
    kilometrage: 55000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 20,
    make: 'Seat',
    model: 'Leon',
    year: 2021,
    price: 100,
    image: seatLeon,
    kilometrage: 85000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
      id: 21,
      make: 'Audi',
      model: 'A4',
      year: 2021,
      price: 80,
      image: audiA4,
      kilometrage: 87000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 22,
      make: 'Peugeot',
      model: '1007',
      year: 2020,
      price: 75,
      image: peugeot1007,
      kilometrage: 96000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 23,
      make: 'Mercedes',
      model: 'AMG A45',
      year: 2021,
      price: 150,
      image: mercedesAMGA45,
      kilometrage: 3000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 24,
      make: 'Bentley',
      model: 'Continental',
      year: 2022,
      price: 300,
      image: bentleyContinental,
      kilometrage: 2000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    }
    
  ];  

// initialize.js

const bcrypt = require('bcrypt');
const Admin = require('./models/admins.js');
const sequelize = require('./database.js');
const Vehicule = require('./models/vehicules.js');





const init = async () => {
  try {
    await sequelize.sync(); // Make sure all tables are created
    console.log("Tables created successfully.");
    


      const vehiclesWithImageURLs = vehicles.map(vehicle => ({
        id: vehicle.id,
        type : vehicle.make,
        marque: vehicle.model,
        modele: vehicle.year,
        kilometrage: vehicle.kilometrage,
        etat: vehicle.etat,
        cout_location_jour: vehicle.price,
        ville: vehicle.ville,
        pays: vehicle.pays,
        image: vehicle.image // Assign the URL string directly
      }));
      
      
      (async () => {
        try {
          await sequelize.sync(); // Sync the database models
      
          await Vehicule.bulkCreate(vehiclesWithImageURLs);
          console.log('Vehicles created successfully');
        } catch (error) {
          console.error('Error creating vehicles:', error);
        }
      })();

    const saltRounds = 10;
    const plainPassword = "admin"; // Replace with the actual password
    let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Now create the admin

    await sequelize.sync();
    const [admin, created] = await Admin.findOrCreate({
      where: { email: 'admin@admin.com' },
      defaults: {
        nom: 'Admin',
        prenom: 'Admin',
        email: 'admin@admin.com',
        mot_de_passe: hashedPassword,
        role: 'admin'
      }
    });

    if (created) {
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

  } catch (err) {
    console.error("Error occurred: ", err);
  }
}

module.exports = init;
*/



const audiRS6= './image/audiRS6.jpg';
const bmwX5= './image/bmwX5.jpg';
const mercedesCClass= './image/mercedesCClass.jpg';
const teslaModelS= './image/teslaModelS.jpg';
const fordMustang= './image/fordMustang.jpg';
const volkswagenGolf= './image/volkswagenGolf.jpg';
const toyotaCamry= './image/toyotaCamry.png';
const hyundaiTucson= './image/hyundaiTucson.jpg';
const nissanRogue= './image/nissanRogue.jpg';
const chevroletImpala= './image/chevroletImpala.jpg';
const lexusES= './image/lexusES.jpg';
const subaruOutback= './image/subaruOutback.jpg';
const mazdaCX5= './image/mazdaCX5.jpg';
const kiaSoul= './image/kiaSoul.jpg';
const jeepWrangler= './image/jeepWrangler.jpg';
const fiat500= './image/fiat500.jpg';
const peugeot308= './image/peugeot308.png';
const renaultClio= './image/renaultClio.png';
const opelCorsa= './image/opelCorsa.jpg';
const seatLeon= './image/seatLeon.jpg';
const audiA4= './image/audiA4.jpg';
const peugeot1007= './image/peugeot1007.jpg';
const mercedesAMGA45= './image/mercedesAMGA45.jpg';
const bentleyContinental= './image/bentleyContinental.jpg';

const vehicles = [
    {
      id: 1,
      make: 'Audi',
      model: 'RS6',
      year: 2021,
      price: 180,
      image: audiRS6,
      kilometrage: 5000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 2,
      make: 'BMW',
      model: 'X5',
      year: 2022,
      price: 120,
      image: bmwX5,
      kilometrage: 7500,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 3,
      make: 'Mercedes',
      model: 'C-Class',
      year: 2020,
      price: 100,
      image: mercedesCClass,
      kilometrage: 2500,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 4,
      make: 'Tesla',
      model: 'Model S',
      year: 2023,
      price: 150,
      image: teslaModelS,
      kilometrage: 10000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 5,
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: 110,
      image: fordMustang,
      kilometrage: 34000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 6,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2021,
      price: 190,
      image: volkswagenGolf,
      kilometrage: 5580,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 7,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      price: 95,
      image: toyotaCamry,
      kilometrage: 35000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 8,
      make: 'Hyundai',
      model: 'Tucson',
      year: 2021,
      price: 85,
      image: hyundaiTucson,
      kilometrage: 65000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 9,
      make: 'Nissan',
      model: 'Rogue',
      year: 2022,
      price: 100,
      image: nissanRogue,
      kilometrage: 75000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 10,
      make: 'Chevrolet',
      model: 'Impala',
      year: 2020,
      price: 95,
      image: chevroletImpala,
      kilometrage: 5000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 11,
    make: 'Lexus',
    model: 'ES',
    year: 2021,
    price: 110,
    image: lexusES,
    kilometrage: 43000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 12,
    make: 'Subaru',
    model: 'Outback',
    year: 2022,
    price: 90,
    image: subaruOutback,
    kilometrage: 87000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 13,
    make: 'Mazda',
    model: 'CX-5',
    year: 2020,
    price: 100,
    image: mazdaCX5,
    kilometrage: 35000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 14,
    make: 'Kia',
    model: 'Soul',
    year: 2021,
    price: 80,
    image: kiaSoul,
    kilometrage: 95000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 15,
    make: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    price: 120,
    image: jeepWrangler,
    kilometrage: 26000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 16,
    make: 'Fiat',
    model: '500',
    year: 2020,
    price: 90,
    image: fiat500,
    kilometrage: 76000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 17,
    make: 'Peugeot',
    model: '308',
    year: 2021,
    price: 85,
    image: peugeot308,
    kilometrage: 45000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 18,
    make: 'Renault',
    model: 'Clio',
    year: 2022,
    price: 95,
    image: renaultClio,
    kilometrage: 23000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 19,
    make: 'Opel',
    model: 'Corsa',
    year: 2020,
    price: 80,
    image: opelCorsa,
    kilometrage: 55000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
    id: 20,
    make: 'Seat',
    model: 'Leon',
    year: 2021,
    price: 100,
    image: seatLeon,
    kilometrage: 85000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
  },
  {
      id: 21,
      make: 'Audi',
      model: 'A4',
      year: 2021,
      price: 80,
      image: audiA4,
      kilometrage: 87000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 22,
      make: 'Peugeot',
      model: '1007',
      year: 2020,
      price: 75,
      image: peugeot1007,
      kilometrage: 96000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 23,
      make: 'Mercedes',
      model: 'AMG A45',
      year: 2021,
      price: 150,
      image: mercedesAMGA45,
      kilometrage: 3000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    },
    {
      id: 24,
      make: 'Bentley',
      model: 'Continental',
      year: 2022,
      price: 300,
      image: bentleyContinental,
      kilometrage: 2000,
      etat: 'Disponible',
      ville: 'Montpellier',
      pays: 'France'
    }
    
  ];  

  const terrains = [
    { id: 1, name: 'Terrain de football', description: 'Un grand terrain pour jouer au football.', location: 'Montpellier 34000 France', image: './image/terrains/football.jpg' },
    { id: 2, name: 'Terrain de basket', description: 'Un terrain parfait pour les matchs de basket.', location: 'Montpellier 34000 France', image: './image/terrains/basket.jpg' },
    { id: 3, name: 'Terrain de padel', description: 'Un terrain moderne pour jouer au padel.', location: 'Montpellier 34000 France', image: './image/terrains/padel.jpg' },
    { id: 4, name: 'Terrain de tennis', description: 'Un terrain en terre battue pour les matchs de tennis.', location: 'Montpellier 34000 France', image: './image/terrains/tennis.jpg' },
    { id: 5, name: 'Piscine', description: 'Une piscine olympique pour la natation.', location: 'Montpellier 34000 France', image: './image/terrains/piscine.jpg' },
    { id: 6, name: 'Terrain de volley', description: 'Un terrain de volley sur sable.', location: 'Montpellier 34000 France', image: './image/terrains/volley.jpg' },
    { id: 7, name: 'Circuit de course', description: 'Un circuit de course pour les compétitions automobiles.', location: 'Montpellier 34000 France', image: './image/terrains/course.jpg' },
    { id: 8, name: 'Terrain de rugby', description: 'Un terrain de rugby pour les matchs intenses.', location: 'Montpellier 34000 France', image: './image/terrains/rugby.jpeg' },
    { id: 9, name: 'Terrain de golf', description: 'Un parcours de golf 18 trous.', location: 'Montpellier 34000 France', image: './image/terrains/golf.jpg' },
    { id: 10, name: 'Terrain de badminton', description: 'Un terrain intérieur pour le badminton.', location: 'Montpellier 34000 France', image: './image/terrains/badminton.jpeg' },
    { id: 11, name: 'Karting', description: 'Un circuit de karting pour les amateurs de vitesse.', location: 'Montpellier 34000 France', image: './image/terrains/karting.jpeg' },
    { id: 12, name: 'E-sport', description: 'Une salle dédiée aux compétitions d\'e-sport.', location: 'Montpellier 34000 France', image: './image/terrains/esport.jpg' },
    { id: 13, name: 'Bowling', description: 'Une piste de bowling pour des parties entre amis.', location: 'Montpellier 34000 France', image: './image/terrains/bowling.jpeg' },
    { id: 14, name: 'Centre équestre', description: 'Un centre équestre pour les amateurs de chevaux.', location: 'Montpellier 34000 France', image: './image/terrains/equestre.jpg' },
    { id: 15, name: 'Terrain de baseball', description: 'Un terrain de baseball pour les matchs et entraînements.', location: 'Montpellier 34000 France', image: './image/terrains/baseball.jpg' },
    { id: 16, name: 'Skatepark', description: 'Un skatepark pour les amateurs de skateboarding.', location: 'Montpellier 34000 France', image: './image/terrains/skatepark.jpg' },
    { id: 17, name: 'Terrain de hockey', description: 'Un terrain de hockey sur gazon.', location: 'Montpellier 34000 France', image: './image/terrains/hockey.jpg' },
    { id: 18, name: 'Salle de boxe', description: 'Une salle de boxe équipée pour l\'entraînement.', location: 'Montpellier 34000 France', image: './image/terrains/boxe.jpg' },
    { id: 19, name: 'Salle d\'escalade', description: 'Un mur d\'escalade pour tous les niveaux.', location: 'Montpellier 34000 France', image: './image/terrains/escalade.jpg' },
  ];

// initialize.js

const bcrypt = require('bcrypt');
const Admin = require('./models/admins.js');
const sequelize = require('./database.js');
const Vehicule = require('./models/vehicules.js');
const Terrain = require('./models/terrains.js'); // Import du modèle Terrain

/*const init = async () => {
  try {
    await sequelize.sync(); // Assurez-vous que toutes les tables sont créées
    console.log("Tables created successfully.");

    const vehiclesWithImageURLs = vehicles.map(vehicle => ({
      id: vehicle.id,
      type: vehicle.make,
      marque: vehicle.model,
      modele: vehicle.year,
      kilometrage: vehicle.kilometrage,
      etat: vehicle.etat,
      cout_location_jour: vehicle.price,
      ville: vehicle.ville,
      pays: vehicle.pays,
      image: vehicle.image // Assign the URL string directly
    }));

    const terrainsWithImageURLs = terrains.map(terrain => ({
      id: terrain.id,
      name: terrain.name,
      description: terrain.description,
      location: terrain.location,
      image: terrain.image // Assign the URL string directly
    }));

    await sequelize.sync(); // Synchronisez les modèles de la base de données

    await Vehicule.bulkCreate(vehiclesWithImageURLs);
    console.log('Vehicles created successfully');

    await Terrain.bulkCreate(terrainsWithImageURLs);
    console.log('Terrains created successfully');

    const saltRounds = 10;
    const plainPassword = "admin"; // Replace with the actual password
    let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Maintenant, créez l'admin
    const [admin, created] = await Admin.findOrCreate({
      where: { email: 'admin@admin.com' },
      defaults: {
        nom: 'Admin',
        prenom: 'Admin',
        email: 'admin@admin.com',
        mot_de_passe: hashedPassword,
        role: 'admin'
      }
    });

    if (created) {
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

  } catch (err) {
    console.error("Error occurred: ", err);
  }
}

module.exports = init;*/

const init = async () => {
  try {
    await sequelize.sync(); // Assurez-vous que toutes les tables sont créées

    console.log("Tables created successfully.");

    // Supprimez l'utilisateur en conflit
    const userConflict = await User.findOne({ where: { email: 'admin@admin.com' } });
    if (userConflict) {
      await userConflict.destroy();
      console.log("Conflicting user deleted successfully.");
    }

    const vehiclesWithImageURLs = vehicles.map(vehicle => ({
      id: vehicle.id,
      type: vehicle.make,
      marque: vehicle.model,
      modele: vehicle.year,
      kilometrage: vehicle.kilometrage,
      etat: vehicle.etat,
      cout_location_jour: vehicle.price,
      ville: vehicle.ville,
      pays: vehicle.pays,
      image: vehicle.image // Assign the URL string directly
    }));

    const terrainsWithImageURLs = terrains.map(terrain => ({
      id: terrain.id,
      name: terrain.name,
      description: terrain.description,
      location: terrain.location,
      image: terrain.image // Assign the URL string directly
    }));

    await sequelize.sync(); // Synchronisez les modèles de la base de données

    await Vehicule.bulkCreate(vehiclesWithImageURLs);
    console.log('Vehicles created successfully');

    await Terrain.bulkCreate(terrainsWithImageURLs);
    console.log('Terrains created successfully');

    const saltRounds = 10;
    const plainPassword = "admin"; // Replace with the actual password
    let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Maintenant, créez l'admin
    const [admin, created] = await Admin.findOrCreate({
      where: { email: 'admin@admin.com' },
      defaults: {
        nom: 'Admin',
        prenom: 'Admin',
        email: 'admin@admin.com',
        mot_de_passe: hashedPassword,
        role: 'admin'
      }
    });

    if (created) {
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }

  } catch (err) {
    console.error("Error occurred: ", err);
  }
}

init();


