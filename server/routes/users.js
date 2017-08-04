var express = require('express');
var router = express.Router();
//var jsonfile = require('jsonfile');

var email = 'anton@mail.com';
var password = '123';

router.post('/', function(req, res, next) {
  console.log(req);
  if (req.body && req.body.email === email && req.body.password === password) {
    res.send(JSON.stringify({
      status: 'ok'
    }));
  } else {
    res.send(JSON.stringify({
      status: 'fail'
    }));
  }
});

module.exports = router;