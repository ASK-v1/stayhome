const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
});

const User = model('User', userSchema);

module.exports = { User };
