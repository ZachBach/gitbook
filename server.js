const express = require('express');
const connectDB = require('./config/db')
const path = require('path');
const passport = require('passport');
// const passport = require('./config/GithubPassport2');
const GitHubStrategy = require('passport-github2').Strategy;
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');
const app = express();

const PORT = process.env.PORT || 3001;

//connect to the database
connectDB();

app.get('/', (req, res) => res.send('API running'))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

  // Define Routes
  // app.use('/api/users', require('./routes/api/users'));
  // app.use('/api/auth', require('./routes/api/auth'));
  // app.use('/api/profile', require('./routes/api/profile'));
  // app.use('/api/posts', require('./routes/api/posts'));

  // Use apiRoutes
  const GITHUB_CLIENT_ID = 'cd53ae7fdb8ecb986bf6';
  const GITHUB_CLIENT_SECRET = 'c21e415068681ae73258bd60a46d5fefc393d817';
  const GITHUB_CALLBACK_URL = "http://127.0.0.1:3001/auth/github/callback"

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

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

  app.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['user:email'] })
  );

  app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('http://127.0.0.1:3000/home');
    }
  );

  app.use('/', apiRoutes);

  app.use('/api/signup', apiRoutes);

  // Define any API routes before this runs
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });

//  Send every request to the React app

// Start the API server
db.sequelize.sync().then(function () {
  
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
})
  