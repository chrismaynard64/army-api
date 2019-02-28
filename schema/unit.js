var UnitModelSchema = require('./unitmodel');
var ArmySchema = require('./army');


var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UnitSchema   = new Schema({
    name: String,
    image: String,
    models: [UnitModelSchema.schema],
    army: { type: Schema.Types.ObjectId, ref: 'Army' }
});

module.exports = mongoose.model('Unit', UnitSchema);

/*

*/  


