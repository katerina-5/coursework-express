const RealEstateObjects = require('../models/realestateobjects');

module.exports = {
  index,
  realestateobject_list,
  realestateobject_detail,
  realestateobject_create,
  realestateobject_delete,
  realestateobject_update
};

function index(req, res, next) {
  res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all realestateobjects.
function realestateobject_list(req, res, next) {
  console.log('List of real estate objects');

  RealEstateObjects.find({})
    .then(realestateobjects => {
      res.send(realestateobjects);
    })
    .catch(error => next(error));
}

// Display detail page for a specific realestateobject.
function realestateobject_detail(req, res, next) {
  console.log('Real estate object detail');

  RealEstateObjects.findById(req.params.id)
    .then(realestateobject => {
      res.send(realestateobject);
    })
    .catch(error => next(error));
}

// realestateobject create on POST.
function realestateobject_create(req, res, next) {
  console.log('Real estate object create');

  RealEstateObjects.create(req.body)
    .then(realestateobject => {
      res.send(realestateobject);
    })
    .catch(error => next(error));
}

// realestateobject delete on DELETE.
function realestateobject_delete(req, res, next) {
  console.log('Real estate object delete');

  RealEstateObjects.findByIdAndDelete(req.params.id)
    .then(realestateobject => {
      res.send(`realestateobject ${realestateobject} deleted!`);
    })
    .catch(error => next(error));
}

// realestateobject update on PUT.
function realestateobject_update(req, res, next) {
  console.log('Real estate object update');

  RealEstateObjects.findByIdAndUpdate(req.params.id, req.body)
    .then(realestateobject => {
      res.send(realestateobject);
    })
    .catch(error => next(error));
}
