
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AddressSchema   = new Schema({
    line1: String,
    line2: String,
    line3: String,
    town: String,
    state: String,
    country: String,
    postCode: String
});

module.exports = mongoose.model('Address', AddressSchema);
