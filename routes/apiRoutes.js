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

router.delete('/api/delete/:id', async (req, res) => {
  await db.CurrentUser.destroy({
    where: {
      CurrentUserGitHubHandle: req.params.id
    }
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});




router.post('/api/likes', async (req, res) => {
  await db.Likes.create({
    likescount: req.body.likesCount,
    status: req.body.status,
    userid: req.body.userid,
    postid: req.body.postid,
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
    parentpostid: req.body.parentpostid,
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
