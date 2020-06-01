const router = require('express').Router();
const db = require('../models');

router.get('/users', (req, res) => {
  db.User.find({
    username: { $regex: new RegExp(req.query.q, 'i') },
  }).then(() => console.log(req.params.q));
});

router.post('/api/signup', (req, res) => {
  db.users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newuser) => {
      res.json(newuser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

// router.get(
//   '/auth/github',
//   passport.authenticate('github', { scope: ['user:email'] })
// );

// router.get(
//   callbackURL,
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/home');
//   }
// );

module.exports = router;
