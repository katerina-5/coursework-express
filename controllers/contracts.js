const Contracts = require('../models/contracts');

module.exports = {
  index,
  contract_list,
  contract_detail,
  contract_create,
  contract_update,
  contract_delete
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all contracts.
function contract_list(req, res, next) {
  console.log('List of contracts');

  Contracts.find({})
    .then(contracts => {
      res.send(contracts);
    })
    .catch(error => next(error));
}

// Display detail page for a specific contract.
function contract_detail(req, res, next) {
  console.log('Contract detail');

  Contracts.findById(req.params.id)
    .then(contract => {
      res.send(contract);
    })
    .catch(error => next(error));
}

// Contract create on POST.
function contract_create(req, res, next) {
  console.log('Contract create');

  Contracts.create(req.body)
    .then(contract => {
      res.send(contract);
    })
    .catch(error => next(error));
}

// Contract delete on DELETE.
function contract_delete(req, res, next) {
  console.log('Contract delete');

  Contracts.findByIdAndDelete(req.params.id)
    .then(contract => {
      console.log(contract);
      res.send(`Contract ${contract} deleted!`);
    })
    .catch(error => next(error));
}

// Contract update on PUT.
function contract_update(req, res, next) {
  console.log('Contract update');

  Contracts.findByIdAndUpdate(req.params.id, req.body)
    .then(contract => {
      res.send(contract);
    })
    .catch(error => next(error));
}
