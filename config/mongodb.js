const mongoose = require('mongoose');
const connection = mongoose.connection;
mongoose.connect(
  'mongodb://user:111111a@ds145223.mlab.com:45223/agency',
  { useNewUrlParser: true }
);

connection.on('connected', () => {
  console.info(`Mongoose connected to`);
});

connection.on('disconnected', () => {
  console.info(`Mongoose disconnected from`);
});

connection.on('error', err => {
  if (err instanceof Error) throw err;
  throw new Error(`Unable connect to database`);
});
