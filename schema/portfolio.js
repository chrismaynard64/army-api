
var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

var PortfolioItemSchema   = new Schema({
    imageSmall: String,
    imageMedium: String,
    imageLarge: String,
    description: String
 });

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);
