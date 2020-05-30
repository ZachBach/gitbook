const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupuserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Signupuser = mongoose.model('signupuser', signupuserSchema);

module.exports = Signupuser;
