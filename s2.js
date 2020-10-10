var unitService =  require('./services/unit-service').UnitService();
const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();              // get an instance of the express Router

const unitRoute = require('./routes/unit.route'); // Imports routes 
const armyRoute = require('./routes/army.route'); // Imports routes 
const weaponRoute = require('./routes/weapon.route'); // Imports routes 


// middleware to use for all requests
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS, HEAD");
  // res.header("Access-Control-Allow-Methods", "*");
 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Origin, Authorization, Engaged-Auth-Token, X-Auth-Token");

   // do logging
   console.log('Something is happening:' +  req.originalUrl);
   next(); // make sure we go to the next routes and don't stop here
});

app.use(router);


var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/40K'); // connect to our database
//mongoose.connect('mongodb://webuser:I.amThe0ne@ds139585.mlab.com:39585/test01'); // connect to our database
var Schema       = mongoose.Schema; 
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello World!'));
/*app.get('/weapon', (req, res) => res.json([{
    _id: string = '',
    id: string = '',
    name: string = '',
    image: string = 'Portrait_01'
}]));*/

//app.get('/units', (req, res) =>  res.json(data.unitS));

app.use('/unit', unitRoute);

app.use('/army', armyRoute);

app.use('/item2', armyRoute);


app.use('/weapon', weaponRoute);

  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))