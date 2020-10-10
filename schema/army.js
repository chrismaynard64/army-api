var UnitSchema = require('./unit');
//var ArmySchema = require('./army');

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

/*
var WizardWeaponSchema   = new Schema({
     level: Number,
    name: String,
    image: String,
    type: String  // offensive/defensive
});*/

var ArmySchema   = new Schema({
    name: String,
    image: String,
    units: [{ type: Schema.Types.ObjectId, ref: 'Unit' }],
    weapons: [{ type: Schema.Types.ObjectId, ref: 'Weapon' }]
 //   units: [UnitSchema.schema]
});

module.exports = mongoose.model('Army', ArmySchema);

/*

*/  