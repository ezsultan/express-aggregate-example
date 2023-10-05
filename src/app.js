const express = require('express');
const routes = require('./routes/v1');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

module.exports = app;

