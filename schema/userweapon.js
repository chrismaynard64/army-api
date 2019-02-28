
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WeaponSchema   = new Schema({
    name: String,
    image: String,
    type: String,  //melee, assault, heavy, rapidFire, grenade, pistol
    range: Number,  //0 = melee
    strength: Number,
    ArmourPenetration: Number,
    Damage: Number,
    attacks: Number



});

module.exports = mongoose.model('Weapon', WeaponSchema);

/*

*/  