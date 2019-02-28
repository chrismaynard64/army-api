const Unit = require('../schema/unit');
const Army = require('../schema/army');
var data =   require('../data/Unit');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
}




exports.units_get = function (req, res, next) {

    
    Unit.find({}).populate('army').exec((err, unit) => {
        if (err) {
            return next(err);
        }
        res.send(unit)
    })
    
  // res.send(UnitS2);



};


exports.unit_create = function (req, res) {
    let unit = new Unit(
        {
            name: req.body.name,
            image: req.body.image
         //  name: 'Bill',
         //   image: 'Male_01_R.png'
        }
    );

    unit.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Unit Created successfully')
    })
};
 
exports.unit_update = function (req, res) {
    if (req.params.id == '-1') {
        let w = {...req.body, _id: undefined};
        console.log(w);
        Unit.create(w, function (err, unit) {
            if (err) return next(err);

            console.log('Army:' + unit.army);

            Army.findById(unit.army, (err, army) => {
                    if (err) return;
                    army.units.push(unit._id)
                    army.save();
            });

            res.send(unit);
        });
    } else {
        let unit = {...req.body};
       // unit.army = unit.army._id;
       //Unit.findByIdAndUpdate(req.params.id, {$set: unit}, {new: true}, function (err, unit) {
        Unit.findByIdAndUpdate(req.params.id, {$set: unit}, {new: true})
            .populate("army")
            .exec(        
                function (err, u) {
                    if (err) return next(err);
                    res.send(u);
                });
    }
};


exports.unit_update_add_unit_to_army = function (req, res, next) {

    Army.findById(req.params.id, function (err, army) {
        if (err) return next(err);

        if (army) {
            if (req.body.army != '-1') {
                army.units.push(req.body.army);

                army.save();
            }
        }

        res.send(army);
    });

};

exports.unit_delete = function (req, res) {
    Unit.findByIdAndRemove(req.params.id, function (err, unit) {
        if (err) return next(err);
        res.send(unit);
    });
};

exports.unit = function (req, res) {
    Unit.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Unit udpated.');
    });
};


exports.unit_load = function (req, res) {
    let i = 2;
    data.UnitS2.forEach(element => {
        i++;
        let unit = new Unit(
            {
                name: 'unit' + i,
                image: element.image
             //  name: 'Bill',
             //   image: 'Male_01_R.png'
            }
        );
    
        unit.save(function (err) {
            if (err) {
                return next(err);
            }
        })
        
    });

 
    res.send('Unit loading in progress')

};