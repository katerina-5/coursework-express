const mysql = require('config/mysql');
const UsersSequelize = require('models/UsersSequelize');
const UsersMongoose = require('models/UsersMongoose');

module.exports = {
  getAll,
  add,
  getAllSequelise,
  addSequelise,
  getAllMongo,
  addMongo,
};

function getAll(req, res, next) {
  mysql.query('SELECT * FROM users', function (error, results, fields) {
    if (error) next(error);

    res.send(results);
  })
}

function add(req, res, next) {
  mysql.query(`INSERT INTO users(name) VALUES('${req.body.name}')`, function (error, results, fields) {
    if (error) next(error);

    res.send(results);
  });

  console.log(req.body);
}

function getAllSequelise(req, res, next) {
  UsersSequelize.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(error => next(error))
}

function addSequelise(req, res, next) {
  UsersSequelize.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(error => next(error))
}

function getAllMongo(req, res, next) {
  UsersMongoose.find({})
    .then(users => {
      res.send(users);
    })
    .catch(error => next(error))
}

function addMongo(req, res, next) {
  UsersMongoose.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(error => next(error))
}
