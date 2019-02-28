const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const army_controller = require('../controllers/army.controller');


// a simple test url to check that all of our files are communicating correctly.
//router.get('/', army_controller.test);

router.post('/', army_controller.army_create);
router.put('/:id', army_controller.army_update);
router.delete('/:id', army_controller.army_delete);
//router.get('/load', army_controller.army_load);
router.get('/', army_controller.armies_get);
router.get('/:id', army_controller.army_get);

module.exports = router;     