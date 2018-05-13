var express = require('express');
var router = express.Router();
var UserModel = require('../users/model');

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = new UserModel({
    username: req.body.email,
    password: req.body.password,
    superuser: req.body.superuser
  });

  user.save(function (err) {
    if (!err) {
      return res.json(user);
    } else {
      //TODO: return page with errors
      return console.log(err);
    }
  });
});

router.get('/', function(req, res, next) {
  return UserModel.find({}, '-password', function (err, users) {
    if (!err) {
      return res.json({ users });
    } else {
      return console.log(err);
    }
  });
});

router.put('/:id/edit', function(req, res) {
  var id = req.params.id;
  //UserModel.findById(id, )
});

router.delete('/', function (req, res, next) {
  var id = req.query.id;
  UserModel.remove({ _id: id }, function (err) {
    if (err) {
      // TODO: add error handling
    }

    res.json({
      id: id
    });
  });
});

module.exports = router;