const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');

const Admin = require('./models/admins');
const Client = require('./models/clients');

const getUserFromDatabase = async (userId, userType) => {
  try {
    let user;
    if (userType === 'admin') {
      user = await Admin.findByPk(userId);
    } else if (userType === 'client') {
      user = await Client.findByPk(userId);
    }

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    throw new Error('Error retrieving user from the database');
  }
};

// Configure JWT options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your-secret-key', // Replace with your own secret key
};


// Configure JWT strategy
const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    // Find the user based on the JWT payload (e.g., retrieve user from the database)
    const user = await getUserFromDatabase(payload.id, payload.role);

    if (user) {
      // If the user is found, return the user object in the 'done' callback
      done(null, user);
    } else {
      // If the user is not found, return 'false' in the 'done' callback
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
});


// Register the JWT strategy with Passport
passport.use('jwt', jwtStrategy);

passport.use(
    'admin-local',
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        // Find the admin by email
        const admin = await Admin.findOne({ where: { email } });
  
        // If admin doesn't exist or password doesn't match, return error
        console.log(password);
        if (!admin || !(await admin.verifyPassword(password))) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
  
        // If admin is found and password matches, return admin
        return done(null, admin);
      } catch (error) {
        return done(error);
      }
    })
  );
  
  passport.use(
    'client-local',
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        // Find the client by email
        const client = await Client.findOne({ where: { email } });
  
        // If client doesn't exist or password doesn't match, return error
        if (!client || !(await client.verifyPassword(password))) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
  
        // If client is found and password matches, return client
        return done(null, client);
      } catch (error) {
        return done(error);
      }
    })
  );
  
// auth.js



passport.serializeUser((client, done) => {
    done(null, client.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      // Find the client by ID
      const client = await Client.findByPk(id);
      const admin = await Admin.findByPk(id);
  
      if(client) {
        done(null, client);
      } else if(admin) {
        done(null, admin);
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      done(error);
    }
  });
  
  

  module.exports = { getUserFromDatabase, passport };