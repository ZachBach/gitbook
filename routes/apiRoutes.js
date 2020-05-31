import router from 'express';

app.get('/auth/github', passport.authenticate('github'), function (req, res) {
  // The request will be redirected to GitHub for authentication, so this
  // function will not be called.
});

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  }
);

export default router;
