const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managersSchema = new Schema({
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
  email: String,
  post: String
});

const Managers = mongoose.model('Managers', managersSchema);

module.exports = Managers;
