const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  father_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: String
});

const Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
