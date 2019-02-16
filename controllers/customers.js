const Customers = require('../models/customers');

module.exports = {
  index,
  customer_list,
  customer_detail,
  customer_create,
  customer_delete,
  customer_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all customers.
function customer_list(req, res, next) {
  console.log('List of customers');

  Customers.find({})
    .then(customers => {
      res.send(customers);
      // console.log(customers);
    })
    .catch(error => next(error));
}

// Display detail page for a specific customer.
function customer_detail(req, res, next) {
  console.log('Customer detail');

  Customers.findById(req.params.id)
    .then(customer => {
      res.send(customer);
      // console.log(customer);
    })
    .catch(error => next(error));
}

// customer create on POST.
function customer_create(req, res, next) {
  console.log('Customer create');

  Customers.create(req.body)
    .then(customer => {
      res.send(customer);
      // console.log(customer);
    })
    .catch(error => next(error));
}

// customer delete on DELETE.
function customer_delete(req, res, next) {
  console.log('Customer delete');

  Customers.findByIdAndDelete(req.params.id, req.body)
    .then(customer => {
      // console.log(customer);
      res.send(`customer ${customer} deleted!`);
    })
    .catch(error => next(error));
}

// Handle customer update on POST.
function customer_update(req, res, next) {
  console.log('Customer update');

  Customers.findByIdAndUpdate(req.params.id, req.body)
    .then(customer => {
      res.send(customer);
      // console.log(customer);
    })
    .catch(error => next(error));
}
