const express = require('express');
const router = express.Router();

// Require controller modules.
const customer_controller = require('../controllers/customers');

/// CUSTOMERS ROUTES ///

// GET catalog home page.
// router.get('/', customer_controller.index);

// POST request for creating Customer.
router.post('/', customer_controller.customer_create);

// DELETE request to delete Customer.
router.delete('/:id', customer_controller.customer_delete);

// PUT request to update Customer.
router.put('/:id', customer_controller.customer_update);

// GET request for list of all Customer items.
router.get('/', customer_controller.customer_list);

// GET request for one Customer.
router.get('/:id', customer_controller.customer_detail);

module.exports = router;
