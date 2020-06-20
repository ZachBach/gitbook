const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
// const passport = require('./config/GithubPassport2');
const GitHubStrategy = require('passport-github2').Strategy;
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

// Keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Use apiRoutes
const GITHUB_CLIENT_ID = 'cd53ae7fdb8ecb986bf6';
const GITHUB_CLIENT_SECRET = 'c21e415068681ae73258bd60a46d5fefc393d817';
const GITHUB_CALLBACK_URL =
  'https://gitcomm-it.herokuapp.com/auth/github/callback';

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      gitHub(profile);
      createCurrentUser(profile, accessToken);
      console.log(profile);
      return cb(null, profile);
    }
  )
);

const gitHub = async (profileData, res) => {
  await db.User.create({
    user_id: profileData.id,
    name: profileData.displayName,
    user_name: profileData['_json']['login'],
    avatar: profileData['_json']['avatar_url'],
    email: profileData['_json']['email'],
    bio: profileData['_json']['bio'],
    profile: profileData.profileUrl,
  })
    .then((newuser) => {
      console.log('in dot then');
      res.json(newuser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const createCurrentUser = async (profileData, accessToken, res) => {
  await db.CurrentUser.create({
    CurrentUserId: profileData.id,
    CurrentUserToken: accessToken,
    CurrentUserGitHubHandle: profileData.username,
  })
    .then((newuser) => {
      res.json(newuser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// app.get(
//   '/user',
//   (req, res) => {
//     console.log("(***************)")
//     console.log(req.session)
//     res.json()
//   })

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('****************');
    console.log(req.user);
    // Successful authentication, redirect home.
    res.redirect('https://gitcomm-it.herokuapp.com/home/' + req.user.username);
  }
);

// Check if req.user has a token and use that token to see if user is authenticated on the home/wall component

// app.get('/account', isAuthenticated, (req, res) => {
//   res.render('success', { 'user' : req.user._json});
// });

// app.use('/auth/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

app.use('/', apiRoutes);

app.use('/api/signup', apiRoutes);

// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//  Send every request to the React app

// // Require apiRoutes
// require('./routes/apiRoutes.js')(app);

// Start the API server
db.sequelize.sync().then(function () {
  // require('./db/seed')(db);
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
