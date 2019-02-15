const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types: mongooseTypes } = mongoose.Schema;

const interviewsSchema = new Schema({
  date_of_interview: {
    type: Date,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  customer: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Customers'
  },
  manager: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Managers'
  }
});

const Interviews = mongoose.model('Interviews', interviewsSchema);

module.exports = Interviews;
