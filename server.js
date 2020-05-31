const express = require('express');
var session = require('express-session');
const passport = require('passport');
var util = require('util');
const GitHubStrategy = require('passport-github2').Strategy;
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const GITHUB_CLIENT_ID = 'cd53ae7fdb8ecb986bf6';
const GITHUB_CLIENT_SECRET = 'c21e415068681ae73258bd60a46d5fefc393d817';

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

// // Use apiRoutes
app.use('/api', apiRoutes);

//  Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
