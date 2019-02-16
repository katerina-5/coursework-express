const Managers = require('../models/managers');

module.exports = {
  index,
  manager_list,
  manager_detail,
  manager_create,
  manager_delete,
  manager_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all managers.
function manager_list(req, res, next) {
  console.log('List of managers');

  Managers.find({})
    .then(managers => {
      res.send(managers);
    })
    .catch(error => next(error));
}

// Display detail page for a specific manager.
function manager_detail(req, res, next) {
  console.log('Manager detail');

  Managers.findById(req.params.id)
    .then(manager => {
      res.send(manager);
    })
    .catch(error => next(error));
}

// manager create on POST.
function manager_create(req, res, next) {
  console.log('Manager create');

  Managers.create(req.body)
    .then(manager => {
      res.send(manager);
    })
    .catch(error => next(error));
}

// manager delete on DELETE.
function manager_delete(req, res, next) {
  console.log('Manager delete');

  Managers.findByIdAndDelete(req.params.id)
    .then(manager => {
      res.send(`manager ${manager} deleted!`);
    })
    .catch(error => next(error));
}

// manager update on PUT.
function manager_update(req, res, next) {
  console.log('Manager update');

  Managers.findByIdAndUpdate(req.params.id, req.body)
    .then(manager => {
      res.send(manager);
    })
    .catch(error => next(error));
}
