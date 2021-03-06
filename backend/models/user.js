const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  about: String,
  phone: String,
  profilePhoto: String,
  host: Object,
});

const User = model('User', userSchema);

module.exports = { User };
