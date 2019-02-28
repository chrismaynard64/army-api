// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var users = require('./userdata');
var User =   require('./schema/user');
var data =   require('./data/wizards');

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'koadah.eu.auth0.com',
    clientID: 'W1HPzdCl9Nq6HrNSj1QrKvC0fnJZ7kqD',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

/*
passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



*/

//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost:27017'); // connect to our database
//mongoose.connect('mongodb://webuser:I.amThe0ne@ds139585.mlab.com:39585/test01'); // connect to our database
//var Schema       = mongoose.Schema; 

//var Fighter     = require('./fighter');
//var Fight     = require('./fight');
//var Bear     = require('./bear');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(passport.initialize());
//app.use(passport.session());


var port = process.env.PORT || 8087;        // set our port

// ROUTES FOR OUR API
// =============================================================================


var router = express.Router();              // get an instance of the express Router

var user = {
    name: 'Bill',
    email: 'bill@test.com'
}




// middleware to use for all requests
router.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 
    // do logging
    console.log('Something is happening:' +  req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/user', function(req, res) {
    res.json(users);   
});


router.get('/user/:id', function(req, res) {
    console.log(req.params);
    if (req.params.id == '-1') {
        let u = new User();
        u = Object.assign(u, {});
        res.json();   
    }

    else
         res.json(user);   
});



router.route('/user')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var user = new User();      // create a new instance of the Bear model
        user.name = req.body.name;  // set the bears name (comes from the request)
        user.email = req.body.email;  // set the bears name (comes from the request)
        user.image = req.body.image;  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    });


    // REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api


router.get('/useri', function(req, res) {
  var user = new User();      // create a new instance of the Bear model
  user.name = 'Max';  // set the bears name (comes from the request)
  user.email = 'max@test.com';  // set the bears name (comes from the request)
  user.image = '';  // set the bears name (comes from the request)


        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

});


router.get('/useri2', function(req, res) {
    var user = new User();      // create a new instance of the Bear model
    user.name = 'Max';  // set the bears name (comes from the request)
    user.email = 'max@test.com';  // set the bears name (comes from the request)
    user.image = '';  // set the bears name (comes from the request)
   user.stuff = 'Stuff';
  
          // save the bear and check for errors
          user.save(function(err) {
              if (err)
                  res.send(err);
  
              res.json({ message: 'User created!' });
          });
  
  });
  
  


router.get('/wizards', function(req, res) {
    console.log(req.params);

        if (err)
            res.send(err);

         //   res.json(data.WIZARDS);
            res.json({ test: 'testing'});

});




router.get('/useru', function(req, res) {

    // use our fighter model to find the fighter we want
    User.findById('59f5e495a3957b3f20cbf6ef', function(err, user) {

        if (err)
            res.send(err);

            user.name = req.body.name;  // update the fighters info

        
            user = Object.assign(user, { name: 'Josh', email: 'josh@test.com'});

        // save the fighter
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json(user);
        });

    });
});



app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
