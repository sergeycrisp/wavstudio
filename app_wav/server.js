/* eslint-disable no-console */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// //Config env
dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log(con.connections);

    console.log('DB connection succesfull');
  })
  .catch((err) => console.log('ERROR', err));

//Run server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});

//Handling exceptions
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled rejection!!! Shutting down');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught exception!!! Shutting down');
});
