import axios from 'axios';
import config from '../config';

export const AuthLogin = ({ email, password }) => {
  return axios.post(config.API.login, {
    'email': email,
    'password': password,
    'strategy': 'local',
  })
    .then(res => res.data);
};