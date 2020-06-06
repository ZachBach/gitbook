const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../models');

router.get('/users', (req, res) => {
  db.User.find({
    username: { $regex: new RegExp(req.query.q, 'i') },
  }).then(() => console.log(req.params.q));
});

// router.post('/',
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const {
//       bio,
//       skills,
//       githubusername
//     } = req.body;

//     const profileFields = {
//       user: req.user.id,
//       bio,
//       skills: Array.isArray(skills)
//         ? skills
//         : skills.split(',').map((skill) => ' ' + skill.trim()),
//       githubusername,
//     };

//     try {
//       // Using upsert option (creates new doc if no match is found):
//       let profile = await Profile.findOneAndUpdate(
//         { user: req.user.id },
//         { $set: profileFields },
//         { new: true, upsert: true }
//       );
//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// router.post(
//   '/', [
//     check('name', 'Name is required')
//       .not()
//       .isEmpty(),
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;

//     res.send('User route')
//   }
// )

// router.post('/signup', function (req, res) {
//   console.log('i will donate half of my first donut to Wills second child');
//   console.log(req.body);
// });

router.post('/api/signup', async (req, res) => {
  console.log(req.body)
  console.log('in the post')
  await db.User
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // email: req.body.email
    })
    .then((newuser) => {
      console.log('in dot then')
      res.json(newuser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});


module.exports = router;