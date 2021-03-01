/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const articlesRouter = require('./routes/articlesRouter');
// const ordersRouter = require('./routes/ordersRouter');
// const usersRouter = require('./routes/usersRouter');
// const musicsRouter = require('./routes/musicsRouter');
// const servicesRouter = require('./routes/servicesRouter');

//creating server
const app = express();

//Middlewares

//Security http headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Body parser

app.use(express.json({ limit: '1000kb' }));

//Log
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

//ROUTES
app.use('/api/v1/articles', articlesRouter);
// app.use('/api/v1/users', usersRouter);
// app.use('/api/v1/orders', ordersRouter);
// app.use('/api/v1/musics', musicsRouter);
// app.use('/api/v1/services', servicesRouter);

//Export server
module.exports = app;
