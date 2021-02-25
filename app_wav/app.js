/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Export server
module.exports = app;
