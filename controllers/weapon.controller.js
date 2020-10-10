const Weapon = require('../schema/weapon');



exports.weapons_get = function (req, res, next) {  
    Weapon.find({}).exec((err, weapon) => {
        if (err) {
            return next(err);
        }
        res.send(weapon)
    })
};


exports.weapon_create = function (req, res, next) {
    let weapon = new Weapon(
        {
            name: req.body.name,
            image: req.body.image,
            type: req.body.type,
            range: req.body.range,
            strength: req.body.strength,
            strengthType: req.body.strengthType,
            armourPenetration: req.body.armourPenetration,
            damage: req.body.damage,
            attacks: req.body.attacks,
            description: req.body.description
        }
    );


        weapon.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(weapon);
    });
};


exports.weapon_update = function (req, res, next) {
    if (req.params.id == '-1') {
        let w = {...req.body, _id: undefined, units: []};
        console.log(w);
        Weapon.create(w, function(err, weapon) {
            if (err) return next(err);
            res.send(weapon);
        });
    } else {
        Weapon.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            .exec((err, weapon) => {
            if (err) return next(err);
            res.send(weapon);
        });
    }
};



exports.weapon_delete = function (req, res) {
    Weapon.findByIdAndRemove(req.params.id, function (err, weapon) {
        if (err) return next(err);
        res.send(weapon);
    });
};

exports.weapon_get = function (req, res, next) {
    Weapon.findById(req.params.id).exec(function (err, weapon) {
        if (err) return next(err);
        res.send(weapon);
    });
};

exports.weapon = function (req, res) {
    Weapon.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Weapon udpated.');
    });
};
