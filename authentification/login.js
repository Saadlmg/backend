/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Define a local strategy for authentication
passport.use(new LocalStrategy(
    (username, password, done) => {
        // Implement your authentication logic here
        if (username === 'admin' && password === 'password') {
            return done(null, { username: 'admin' });
        } else {
            return done(null, false, { message: 'Incorrect username or password' });
        }
    }
));

// Serialize and deserialize user object
passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    done(null, { username: username });
});

// Define a route for authentication
app.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Authenticated');
});

// Define a protected route that requires authentication
app.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Protected resource');
    } else {
        res.redirect('/login');
    }
});

// Start the server
app.listen(8000, () => {
    console.log('Server started on port 8000');
});
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admins');


// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Define a local strategy for authentication
/*passport.use(new LocalStrategy(
    (username, password, done) => {
        // Implement your authentication logic here
        if (username === 'admin' && password === 'password') {
            return done(null, { username: 'admin' });
        } else {
            return done(null, false, { message: 'Incorrect username or password' });
        }
    }
));*/

passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const admin = await Admin.findOne({ where: { username: username } });
  
        if (!admin || !admin.validatePassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }
  
        return done(null, admin);
      } catch (err) {
        return done(err);
      }
    }
  ));
  

// Serialize and deserialize user object
passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    done(null, { username: username });
});

// Define a route for authentication
/*app.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Authenticated');
});*/

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, admin, info) => {
      if (err) {
        return next(err);
      }
      if (!admin) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(admin, (err) => {
        if (err) {
          return next(err);
        }
        return res.send('Authenticated');
      });
    })(req, res, next);
  });
  

// Define a protected route that requires authentication
app.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Protected resource');
    } else {
        res.redirect('/login');
    }
});

// Start the server
app.listen(8000, () => {
    console.log('Server started on port 8000');
});
