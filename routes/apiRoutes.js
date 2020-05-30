const router = require('express').Router();
const db = require('../models');


router.get('/users', (req, res) => {
  db.User.find({
    username: { $regex: new RegExp(req.query.q, 'i') },
  }).then(() => console.log(req.params.q));
})

router.post('/api/signup', ({body}, res) => {
  db.Signupuser.create(body)
    .then(
    newuser => {
      res.json(newuser);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})

module.exports = router;