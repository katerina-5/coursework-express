const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types: mongooseTypes } = mongoose.Schema;

const realEstateObjectsSchema = new Schema({
  object_type: {
    type: String,
    required: true
  },
  square: {
    type: Number,
    required: true
  },
  rent_price: {
    type: Number,
    required: true
  },
  room_count: {
    type: Number,
    required: true
  },
  storeys_count: {
    type: Number,
    required: true
  },
  address: {
    zip_code: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    house_number: {
      type: Number,
      required: true
    },
    apartment_number: {
      type: Number
    }
  },
  category_title: {
    type: String
  },
  responsible_manager: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Managers'
  },
  owner: {
    type: mongooseTypes.ObjectId,
    required: true,
    $ref: 'Customers'
  }
});

const RealEstateObjects = mongoose.model(
  'Real Estate Objects',
  realEstateObjectsSchema
);

module.exports = RealEstateObjects;
