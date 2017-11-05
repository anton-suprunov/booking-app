const router = require('express').Router();

const login = require('./login');
const logout = require('./logout');
const users = require('./users')

router.use('/login', login);
router.use('/users', users)
//router.use('/logout', logout);

module.exports = router;