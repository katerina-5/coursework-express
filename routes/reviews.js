const express = require('express');
const router = express.Router();

// Require controller modules.
const review_controller = require('../controllers/reviews');

/// REVIEWS ROUTES ///

// GET catalog home page.
// router.get('/', review_controller.index);

// POST request for creating Review.
router.post('/', review_controller.review_create);

// DELETE request to delete Review.
router.delete('/:id', review_controller.review_delete);

// PUT request to update Review.
router.put('/:id', review_controller.review_update);

// GET request for list of all Review items.
router.get('/', review_controller.review_list);

// GET request for one Review.
router.get('/:id', review_controller.review_detail);

module.exports = router;
