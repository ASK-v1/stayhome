const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const { SECRET } = require('../keys');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

router.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send();
  } else res.status(401).send();
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email });
  const match = await bcrypt.compare(password, userData.password);
  if (match) {
    const token = jwt.sign(email, SECRET);
    res.send({ token, userData });
    res.status(201).send();
  } else res.status(401).send();
});

module.exports = router;
