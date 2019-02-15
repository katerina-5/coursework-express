const Sequelize = require('sequelize');
const sequelize = require('config/sequelize');

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

// force: true will drop the table if it already exists
// Users.sync({ force: true }).then(() => {
//   // Table created
//   return Users.create({
//     name: 'John Doe',
//   });
// });

module.exports = Users;
