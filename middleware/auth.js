const passport = require('passport');


// Middleware function to check if the user is authenticated and has the admin role
const isAdmin = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during authentication' });
    }
    if (!user || user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user; // Manually assign the user object to req.user
    next();
  })(req, res, next);
};

// Middleware function to check if the user is authenticated and has the client role
const isClient = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during authentication' });
    }
    console.log(user.role);
    if (!user || (user.role !== 'client' && user.role !=='admin') ) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user; // Manually assign the user object to req.user
    next();
  })(req, res, next);
};





module.exports = { isAdmin, isClient };
