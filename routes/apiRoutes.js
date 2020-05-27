const router = require('express').Router();
const db = require('../models');

router.get('/recipes', (req, res) => {
  console.log(req);
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.User.find({
    username: { $regex: new RegExp(req.query.q, 'i') },
  }).then(() => console.log(req.params.q));

  // .then((recipes) => res.json(recipes))
  // .catch((err) => res.status(422).end());
});

module.exports = router;
