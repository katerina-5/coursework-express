const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types: mongooseTypes } = mongoose.Schema;

const reviewsSchema = new Schema({
  date_of_review: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  manager: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Managers'
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

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
