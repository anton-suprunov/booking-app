import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';

import config from '../config';

const socket = io(config.API.base);
const app = feathers();

// Setup the transport (Rest, Socket, etc.) here
app.configure(socketio(socket));

// Available options are listed in the "Options" section
app.configure(auth({
  storage: window.localStorage,
  service: 'admins',
  entity: 'admin',
}));

export default app;