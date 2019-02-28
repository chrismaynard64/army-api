
var mongoose     = require('mongoose');

var PortfolioItem = require('./portfolio')

var Schema       = mongoose.Schema;

var ProfileSchema   = new Schema({
    profileImage: String,
    connectionImage: String,
    biography: String,
    portfolio: [PortfolioItem.schema]
});

module.exports = mongoose.model('Profile', ProfileSchema);
