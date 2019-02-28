
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SquadSchema   = new Schema({
    name: String,
    image: String,
    type: String,  // offensive/defensive

});

module.exports = mongoose.model('Squad', SquadSchema);

/*

*/  