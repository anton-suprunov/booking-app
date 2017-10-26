var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', 
  passport.authenticate('local', { failWithError: true }), 
  function(req, res) {
    console.log('this should be called in case of successfull request auth login success');
    return res.json({
      status: 'ok'
    });
  }
);

router.use('/', function(err, req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(401).json({
      status: 'fail'
    });
  } else {
    next();
  }
});

module.exports = router;