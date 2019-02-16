const Payments = require('../models/payments');

module.exports = {
  index,
  payment_list,
  payment_detail,
  payment_create,
  payment_delete,
  payment_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all payments.
function payment_list(req, res, next) {
  console.log('List of payments');

  Payments.find({})
    .then(payments => {
      res.send(payments);
    })
    .catch(error => next(error));
}

// Display detail page for a specific payment.
function payment_detail(req, res, next) {
  console.log('Payment detail');

  Payments.findById(req.params.id)
    .then(payment => {
      res.send(payment);
    })
    .catch(error => next(error));
}

// payment create on POST.
function payment_create(req, res, next) {
  console.log('Payment create');

  Payments.create(req.body)
    .then(payment => {
      res.send(payment);
    })
    .catch(error => next(error));
}

// payment delete on DELETE.
function payment_delete(req, res, next) {
  console.log('Payment delete');

  Payments.findByIdAndDelete(req.params.id)
    .then(payment => {
      res.send(`payment ${payment} deleted!`);
    })
    .catch(error => next(error));
}

// payment update on PUT.
function payment_update(req, res, next) {
  console.log('Payment update');

  Payments.findByIdAndUpdate(req.params.id, req.body)
    .then(payment => {
      res.send(payment);
    })
    .catch(error => next(error));
}
