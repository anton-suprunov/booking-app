// admins-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const admins = new mongooseClient.Schema({
  
    email: {type: String, unique: true},
    password: { type: String },
    superuser: { type: Boolean },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('admins', admins);
};
