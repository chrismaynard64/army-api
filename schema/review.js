
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ReviewSchema   = new Schema({
    title: String,
    email: String,
    contactInfo: ContactInfo,
    resume: Resume


});

module.exports = mongoose.model('Review', ReviewSchema);
