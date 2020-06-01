const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
// const passport = require('./config/GithubPassport2');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });

  // Define any API routes before this runs
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = 'cd53ae7fdb8ecb986bf6';
const GITHUB_CLIENT_SECRET = 'c21e415068681ae73258bd60a46d5fefc393d817';
const GITHUB_CALLBACK_URL = '/auth/github/callback';

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken, refreshToken, profile);
      return cb(null, profile);
    }
  )
);

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/home');
  }
);
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

app.use(
  cors({
    origin: 'http://localhost:3000', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookie from browser to pass through
  })
);

// Use apiRoutes
app.use('/', apiRoutes);

//  Send every request to the React app

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
