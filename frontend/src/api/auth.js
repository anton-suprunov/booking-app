import axios from 'axios';
import config from '../config';

export const AuthLogin = (data) => {
  return axios.post(config.API.users, data)
    .then(res => res.data.status);
};