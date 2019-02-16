const Reviews = require('../models/reviews');

module.exports = {
  index,
  review_list,
  review_detail,
  review_create,
  review_delete,
  review_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all reviews.
function review_list(req, res, next) {
  console.log('List of reviews');

  Reviews.find({})
    .then(reviews => {
      res.send(reviews);
    })
    .catch(error => next(error));
}

// Display detail page for a specific review.
function review_detail(req, res, next) {
  console.log('Review detail');

  Reviews.findById(req.params.id)
    .then(review => {
      res.send(review);
    })
    .catch(error => next(error));
}

// review create on POST.
function review_create(req, res, next) {
  console.log('Review create');

  Reviews.create(req.body)
    .then(review => {
      res.send(review);
    })
    .catch(error => next(error));
}

// review delete on DELETE.
function review_delete(req, res, next) {
  console.log('Review delete');

  Reviews.findByIdAndDelete(req.params.id)
    .then(review => {
      res.send(`review ${review} deleted!`);
    })
    .catch(error => next(error));
}

// review update on PUT.
function review_update(req, res, next) {
  console.log('Review update');

  Reviews.findByIdAndUpdate(req.params.id, req.body)
    .then(review => {
      res.send(review);
    })
    .catch(error => next(error));
}
