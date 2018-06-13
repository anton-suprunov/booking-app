import axios from 'axios';

import app from './feathers-setup';
import config from '../config';

/*export const AuthLogin = ({ email, password }) => {
  return axios.post(config.API.login, {
    'email': email,
    'password': password,
    'strategy': 'local',
  })
    .then(res => res.data);
};*/

export const AuthLogin = ({ email, password }) => {
  return app.authenticate({
    strategy: 'local',
    email,
    password,
  });
};

export const AuthJWT = () => {
  return app.authenticate();
};
