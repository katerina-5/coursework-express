const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types: mongooseTypes } = mongoose.Schema;

const contractsSchema = new Schema({
  date_of_stacking: {
    type: Date
    // required: true
  },
  date_begin: {
    type: Date
    // required: true
  },
  date_end: {
    type: Date
    // required: true
  },
  expiration_date: Date,
  mark_payment_first: Boolean,
  name: {
    type: String,
    required: true
  },
  manager: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Managers'
    // $id: '',
    // $db: 'agency'
  },
  customer: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Customers'
  },
  object: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Real Estate Objects'
  }
});

const Contracts = mongoose.model('Contracts', contractsSchema);

module.exports = Contracts;
