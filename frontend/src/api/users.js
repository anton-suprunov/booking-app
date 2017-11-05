import axios from 'axios';
import config from '../config';

export const fetchUsers = () => {
  return axios.get(config.API.users)
    .then(res => res.data);
};

export const createUser = (values) => {
  return axios.post(config.API.users, values)
    .then(res => res.data);
};

export const deleteUser = (id) => {
  return axios.delete(config.API.users, { 
    params : {
      id,
    },
  })
    .then(res => res.data);
};