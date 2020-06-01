const express = require('express');
const session = require('express-session');
const path = require('path');
// const passport = require('./config/GithubPassport2');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./models');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

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

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
// app.use(passport.initialize());
// app.use(passport.sessions());

app.use(
  cors({
    origin: 'http://localhost:3000', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookie from browser to pass through
  })
);

// Use apiRoutes
app.use('/api', apiRoutes);

//  Send every request to the React app

// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
