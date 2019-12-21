const admins = require('./admins/admins.service.js');
const teachers = require('./teachers/teachers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admins);
  app.configure(teachers);
};
