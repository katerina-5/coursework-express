const Interviews = require('../models/interviews');

module.exports = {
  index,
  interview_list,
  interview_detail,
  interview_create,
  interview_delete,
  interview_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all interviews.
function interview_list(req, res, next) {
  console.log('List of interviews');

  Interviews.find({})
    .then(interviews => {
      res.send(interviews);
    })
    .catch(error => next(error));
}

// Display detail page for a specific interview.
function interview_detail(req, res, next) {
  console.log('Interview detail');

  Interviews.findById(req.params.id)
    .then(interview => {
      res.send(interview);
    })
    .catch(error => next(error));
}

// interview create on POST.
function interview_create(req, res, next) {
  console.log('Interview create');

  Interviews.create(req.body)
    .then(interview => {
      res.send(interview);
    })
    .catch(error => next(error));
}

// interview delete on DELETE.
function interview_delete(req, res, next) {
  console.log('Interview delete');

  Interviews.findByIdAndDelete(req.params.id)
    .then(interview => {
      res.send(`interview ${interview} deleted!`);
    })
    .catch(error => next(error));
}

// interview update on PUT.
function interview_update(req, res, next) {
  console.log('Interview update');

  Interviews.findByIdAndUpdate(req.params.id, req.body)
    .then(interview => {
      res.send(interview);
    })
    .catch(error => next(error));
}
