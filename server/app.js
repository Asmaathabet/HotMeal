const { join } = require('path');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./controllers');
require('env2')('config.env');

const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(error);

  res.status(500).send({ code: 500, error: 'Internal Server Error' });
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
