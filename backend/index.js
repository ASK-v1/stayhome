const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const { mongoURI } = require('./key');

mongoose.connect(process.env.MONGO_URI || mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

const port = process.env.PORT || '5000';
app.listen(port);
