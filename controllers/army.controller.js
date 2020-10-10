const Army = require('../schema/army');
var data =   require('../data/Unit');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
}




exports.armies_get = function (req, res, next) {

    
//    Army.find({}).populate('units').exec((err, army) => {
    Army.find({}).exec((err, army) => {
            if (err) {
            return next(err);
        }
        console.log(army);
        res.send(army)
    })
    
  // res.send(armies2);

};


exports.army_create = function (req, res, next) {
    let army = new Army(
        {
            name: req.body.name,
            image: req.body.image,
            units: []
        }
    );

    army.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Army Created successfully')
    })
};

exports.army_update = function (req, res, next) {
    if (req.params.id == '-1') {
        let w = {...req.body, _id: undefined, units: []};
        console.log(w);
        Army.create(w, function(err, army) {
            if (err) return next(err);
            res.send(army);
        });
    } else {
        Army.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .populate('units')
            .exec((err, army) => {
            if (err) return next(err);
            res.send(army);
        });
    }
};



exports.army_delete = function (req, res) {
    Army.findByIdAndRemove(req.params.id, function (err, army) {
        if (err) return next(err);
        res.send(army);
    });
};

exports.army_get = function (req, res) {
    Army.findById(req.params.id).populate('units').populate('weapons').exec(function (err, army) {
        if (err) return next(err);
        res.send(army);
    });
};

exports.army = function (req, res) {
    Army.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Army udpated.');
    });
};


exports.army_load = function (req, res) {
    let i = 2;
    data.armies2.forEach(element => {
        i++;
        let army = new Army(
            {
                name: element.name,
                image: element.image
             //  name: 'Bill',
             //   image: 'Male_01_R.png'
            }
        );
    
        army.save(function (err) {
            if (err) {
                return next(err);
            }
        })
        
    });

 
    res.send('Army loading in progress')

};