const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const weapon_controller = require('../controllers/weapon.controller');


// a simple test url to check that all of our files are communicating correctly.

router.get('/', weapon_controller.weapons_get);
router.post('/', weapon_controller.weapon_create);
router.put('/:id', weapon_controller.weapon_update);
router.delete('/:id', weapon_controller.weapon_delete);
router.get('/:id', weapon_controller.weapon_get);
module.exports = router;     