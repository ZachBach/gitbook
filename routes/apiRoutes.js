const router = require('express').Router();
const db = require('../models');

router.get('/users', (req, res) => {
  db.User.find({
    username: { $regex: new RegExp(req.query.q, 'i') },
  }).then(() => console.log(req.params.q));
})

module.exports = router;