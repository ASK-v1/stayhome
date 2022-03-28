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
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    const match = await bcrypt.compare(password, userData.password);
    if (match) {
      const token = jwt.sign(email, SECRET);
      res.send({ token, userData });
    } else res.status(401).send();
  } catch {
    res.status(401).send();
  }
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

router.get(
  '/rooms/:city/filter/:wifi/:kitchen/:parking/:washer/:dryer/:iron/:tv/:pool/:balcony/:entirePlace/:privateRoom/:hotelRoom/:sharedRoom/:minPrice/:maxPrice',
  async (req, res) => {
    const {
      wifi,
      kitchen,
      parking,
      washer,
      dryer,
      iron,
      tv,
      pool,
      balcony,
      entirePlace,
      privateRoom,
      hotelRoom,
      sharedRoom,
      minPrice,
      maxPrice,
      city,
    } = req.params;

    const cityParams = city.split('-').join(' ');

    let space = [];
    if (
      entirePlace === 'false' &&
      privateRoom === 'false' &&
      hotelRoom === 'false' &&
      sharedRoom === 'false'
    ) {
      space = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
    } else {
      if (entirePlace === 'true') space.push('Entire place');
      if (privateRoom === 'true') space.push('Private room');
      if (hotelRoom === 'true') space.push('Hotel room');
      if (sharedRoom === 'true') space.push('Shared room');
    }

    let amenity = [];
    wifi === 'true' ? amenity.push(true) : amenity.push(false);
    washer === 'true' ? amenity.push(true) : amenity.push(false);
    parking === 'true' ? amenity.push(true) : amenity.push(false);
    kitchen === 'true' ? amenity.push(true) : amenity.push(false);
    dryer === 'true' ? amenity.push(true) : amenity.push(false);
    iron === 'true' ? amenity.push(true) : amenity.push(false);
    pool === 'true' ? amenity.push(true) : amenity.push(false);
    tv === 'true' ? amenity.push(true) : amenity.push(false);
    balcony === 'true' ? amenity.push(true) : amenity.push(false);

    if (
      amenity[0] ||
      amenity[1] ||
      amenity[2] ||
      amenity[3] ||
      amenity[4] ||
      amenity[5] ||
      amenity[6] ||
      amenity[7] ||
      amenity[8]
    ) {
      const all = [
        { 'host.amenity.wifi': true },
        { 'host.amenity.washer': true },
        { 'host.amenity.free': true },
        { 'host.amenity.kitchen': true },
        { 'host.amenity.dryer': true },
        { 'host.amenity.iron': true },
        { 'host.amenity.pool': true },
        { 'host.amenity.tv': true },
        { 'host.amenity.balcony': true },
      ];

      const amenities = [];
      for (let i = 0; i < 9; i++) {
        if (amenity[i]) amenities.push(all[i]);
      }

      const rooms = await User.find({
        'host.location.city': cityParams,
        'host.price': { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
        'host.space': { $in: space },
        $or: [Object.assign(...amenities)],
      });
      res.send({ rooms });
    } else {
      const rooms = await User.find({
        'host.location.city': cityParams,
        'host.price': { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
        'host.space': { $in: space },
      });
      res.send({ rooms });
    }
  },
);

router.get('/search', async (req, res) => {
  const users = await User.find();
  res.send({ users });
});

module.exports = router;
