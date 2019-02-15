const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
