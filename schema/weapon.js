
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WeaponSchema   = new Schema({
    name: String,
    image: String,
    type: String,  //melee, assault, heavy, rapidFire, grenade, pistol
    range: Number,  //0 = melee
    strength: Number,
    strengthType: Number,   //1 - absolute, 2 - plus, 3 - multiply
    armourPenetration: Number,
    damage: Number,
    attacks: Number,
    description: String



});

module.exports = mongoose.model('Weapon', WeaponSchema);

/*

*/  