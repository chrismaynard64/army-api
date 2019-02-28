
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VehicleSchema   = new Schema({
    name: String,
    image: String,
    type: String,  // offensive/defensive

});

module.exports = mongoose.model('Vehicle', VehicleSchema);

/*

*/  