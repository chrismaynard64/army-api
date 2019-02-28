
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Weapon = require("./weapon");


var WizardWeaponSchema   = new Schema({
    power: Number,
    level: Number,
    name: String,
    image: String,
    type: String  // offensive/defensive
});

module.exports = mongoose.model('WizardWeapon', WizardWeaponSchema);

/*

*/  