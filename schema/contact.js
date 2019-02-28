
var mongoose     = require('mongoose');

var Address = require('./address');

var Schema       = mongoose.Schema;

var ContactInfoSchema   = new Schema({
    firstName: String,
    lastName: String,
    initials: String,
    address: Address.schema
});

module.exports = mongoose.model('ContactInfo', ContactInfoSchema);
