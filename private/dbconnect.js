exports.db1 = 'mongodb://localhost:27017/db1';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db1')
  .then(() =>  console.log('mongoose connection established...'))
  .catch((err) => console.error(err));