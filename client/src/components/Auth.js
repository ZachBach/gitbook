import React from 'react'
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const app = express();
const db = require('../../../models');
import { createUserIndexDB } from '../../../models/CurrentUserIndexDB'
import { initDB, useIndexedDB } from 'react-indexed-db';


initDB(createUserIndexDB);
// Keep track of our user's login status
app.use(
    session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Use apiRoutes
const GITHUB_CLIENT_ID = 'cd53ae7fdb8ecb986bf6';
const GITHUB_CLIENT_SECRET = 'c21e415068681ae73258bd60a46d5fefc393d817';
const GITHUB_CALLBACK_URL = 'http://127.0.0.1:3001/auth/github/callback';

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
    const db = useIndexedDB('CurrentUser');
    db.add({ token: accessToken, handle: profileData.username }).then(
        event => {
            console.log('ID Generated: ', event.target.result);
        },
        error => {
            console.log(error);
        })

};


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
        console.log('authenticated');
        // Successful authentication, redirect home.
        res.redirect('http://127.0.0.1:3000/home');
    }
);
