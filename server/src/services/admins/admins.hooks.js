const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    //find: [ authenticate('jwt') ],
    find: [],
    //get: [ authenticate('jwt') ],
    get: [],
    create: [ hashPassword() ],
    //update: [ hashPassword(),  authenticate('jwt') ],
    update: [ hashPassword() ],
    //patch: [ hashPassword(),  authenticate('jwt') ],
    patch: [ hashPassword() ],
    //remove: [ authenticate('jwt') ]
    remove: [ ]

  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
