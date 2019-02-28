const Unit = require('./schema/unit');
const Army = require('./schema/army');
//const UnitModel = require('./schema/unitmodel');

var data =   require('./data/unit');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/40K'); // connect to our database
//mongoose.connect('mongodb://webuser:I.amThe0ne@ds139585.mlab.com:39585/test01'); // connect to our database
var Schema       = mongoose.Schema; 
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


function loadWizards() {
    data.UNITS.forEach(u => {
            let unit = new Unit(u);

            unit.save().then(() => {
                console.log('saved unit:'+ u.name);
            })
    });
}



function loadArmy() {
    data.ARMYS.forEach(a => {
            let army = new Army(a);

            army.save().then(() => {
                console.log('saved unit:'+ a.name);
            })
    });
}


loadWizards();
//loadArmy();



