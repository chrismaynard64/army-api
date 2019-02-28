
var WeaponSchema = require("./weapon");

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UnitModelSchema   = new Schema({
    name: String,
    image: String,
    role: String,
    character: Boolean,
    powerRating: Number,
    portrait: String,
    movement: Number,
    weaponSkill: Number,
    ballisticSkill: Number,
    strength: Number,
    toughness: Number,
    wounds: Number,
    attacks: Number,
    leadership: Number,
    savec: Number,
    fly: Boolean,
    movementMinimum: Number,
    psyker: Boolean,
    keywords: [String],
    factionKeywords: [String],
    numberMin: Number,
    numberMax: Number
 
 //   weapons: [WeaponSchema]
});

module.exports = mongoose.model('UnitModel', UnitModelSchema);

/*

*/  