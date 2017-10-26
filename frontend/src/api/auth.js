import axios from 'axios';
import config from '../config';

export const AuthLogin = (data) => {
  return axios.post(config.API.login, {
    username: data.email,
    password: data.password,
  }, {
    //withCredentials: true,
  }).then(res => res.data.status);
};