const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types: mongooseTypes } = mongoose.Schema;

const paymentsSchema = new Schema({
  contract_name: {
    type: String,
    required: true
  },
  date_of_payment: {
    type: Date,
    required: true
  },
  sum: {
    type: Number,
    required: true
  },
  contract: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Contracts'
  }
});

const Payments = mongoose.model('Payments', paymentsSchema);

module.exports = Payments;
