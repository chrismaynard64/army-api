const Wizard = require('./schema/wizard');
const Weapon = require('./schema/weapon');
const WeaponVs = require('./schema/weaponVs');
var data =   require('./data/wizards');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Wizards'); // connect to our database
//mongoose.connect('mongodb://webuser:I.amThe0ne@ds139585.mlab.com:39585/test01'); // connect to our database
var Schema       = mongoose.Schema; 
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function loadWeapons() { 
    for (i = 1; i < 131; i++ ) {

        let weapon = new Weapon({
            "image":"icon_64x64_" + i + ".png",
            name: "One"
    });

    weapon.save().then(()=> {
            console.log('saved');
        // db.disconnect();
        });
    }
}

function loadWizards() {
    data.WIZARDS.forEach(w => {
            let wiz = new Wizard(w);

            wiz.save().then(() => {
                console.log('saved wiz:'+ w.name);
            })
    });
}

loadWizards();



