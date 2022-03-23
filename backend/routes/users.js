const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const { SECRET } = require('../key');

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

router.post('/edit', async (req, res) => {
  const { firstName, lastName, phone, about, email, id } = req.body;

  if (about) await User.updateOne({ _id: id }, { $set: { about } });
  if (firstName) await User.updateOne({ _id: id }, { $set: { firstName } });
  if (lastName) await User.updateOne({ _id: id }, { $set: { lastName } });
  if (phone) await User.updateOne({ _id: id }, { $set: { phone } });
  if (email) await User.updateOne({ _id: id }, { $set: { email } });

  const userData = await User.findById(id);
  res.send({ userData });
});

router.post('/host', async (req, res) => {
  const { space, location, guest, amenity, photos, title, description, price, id } = req.body;

  await User.updateOne(
    { _id: id },
    {
      $set: {
        host: {
          space,
          location,
          guest,
          amenity,
          title,
          description,
          price,
          photos,
        },
      },
    },
  );

  const userData = await User.findById(id);
  res.send({ userData });
});

router.post('/pp', async (req, res) => {
  const { photo, id } = req.body;
  await User.updateOne({ _id: id }, { $set: { profilePhoto: photo } });

  const userData = await User.findById(id);
  res.send({ userData });
});

router.get('/room/:id', async (req, res) => {
  const { id } = req.params;
  const room = await User.findById(id);
  res.send({ room });
});

router.get('/rooms/:city', async (req, res) => {
  const { city } = req.params;
  const cityParams = city.split('-').join(' ');
  const rooms = await User.find({ 'host.location.city': cityParams });
  if (!rooms) return res.status(404).send();
  res.send({ rooms });
});

module.exports = router;
