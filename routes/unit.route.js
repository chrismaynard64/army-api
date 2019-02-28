const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const unit_controller = require('../controllers/unit.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', unit_controller.test);

router.post('/create', unit_controller.unit_create);
router.put('/save/:id', unit_controller.unit_update);
router.put('/savetoarmy/:id', unit_controller.unit_update_add_unit_to_army);
router.delete('/delete/:id', unit_controller.unit_delete);
router.get('/load', unit_controller.unit_load);
router.get('/get', unit_controller.units_get);

module.exports = router;     