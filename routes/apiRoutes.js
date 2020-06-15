const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../models');

router.get('/api/wallpost', (req, res) => {
  db.WallPost.findAll({}).then((data) => {
    console.log(data);
    res.json(data);
  });
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




router.post('/api/likes', async (req, res) => {
  await db.Likes.create({
    likescount: req.body.likesCount,
    status: req.body.status,
    userid: req.body.userid,
    postid: req.body.postid
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get('/api/likes', (req, res) => {
  db.CurrentUser.findAll({}).then((data) => {
    console.log(data);
    res.json(data);
  });
});

router.post('/api/currentuser', async (req, res) => {
  await db.WallPost.create({
    CurrentUserId: req.body.wallPostId,
    wallPostContent: req.body.wallPostContent,
  })
    .then((newpost) => {
      console.log('in the dot then of wall post route');
      res.json(newpost);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get('/api/currentuser', (req, res) => {
  db.CurrentUser.findAll({}).then((data) => {
    console.log(data);
    res.json(data);
  });
});

router.post('/api/wallpost', async (req, res) => {
  await db.WallPost.create({
    wallPostId: req.body.wallPostId,
    wallPostContent: req.body.wallPostContent,
    userid: req.body.userid,
    parentpostid: req.body.parentpostid
  })
    .then((newpost) => {
      console.log('in the dot then of wall post route');
      res.json(newpost);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post('/api/signup', async (req, res) => {
  await db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // email: req.body.email
  })
    .then((newuser) => {
      console.log('in dot then');
      res.json(newuser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
