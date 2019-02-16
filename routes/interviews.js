const express = require('express');
const router = express.Router();

// Require controller modules.
const interview_controller = require('../controllers/interviews');

/// INTERVIEWS ROUTES ///

// GET catalog home page.
// router.get('/', interview_controller.index);

// POST request for creating Interview.
router.post('/', interview_controller.interview_create);

// DELETE request to delete Interview.
router.delete('/:id', interview_controller.interview_delete);

// PUT request to update Interview.
router.put('/:id', interview_controller.interview_update);

// GET request for list of all Interview items.
router.get('/', interview_controller.interview_list);

// GET request for one Interview.
router.get('/:id', interview_controller.interview_detail);

module.exports = router;
