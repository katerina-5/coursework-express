const express = require('express');
const router = express.Router();

// Require controller modules.
const manager_controller = require('../controllers/managers');

/// MANAGERS ROUTES ///

// GET catalog home page.
// router.get('/', manager_controller.index);

// POST request for creating Manager.
router.post('/', manager_controller.manager_create);

// DELETE request to delete Manager.
router.delete('/:id', manager_controller.manager_delete);

// PUT request to update Manager.
router.put('/:id', manager_controller.manager_update);

// GET request for list of all Manager items.
router.get('/', manager_controller.manager_list);

// GET request for one Manager.
router.get('/:id', manager_controller.manager_detail);

module.exports = router;
