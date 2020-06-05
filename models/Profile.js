const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
