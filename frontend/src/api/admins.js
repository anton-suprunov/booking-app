import axios from 'axios';
import config from '../config';

import app from './feathers-setup';

export const fetchAdmins = () => {
  return axios.get(config.API.admins)
    .then(res => res.data.data);
};

export const createAdmin = ({ 
  email, 
  password, 
  superuser, 
}) => {
  return axios.post(config.API.admins, {
    email,
    password,
    superuser,
  })
    .then(res => res.data);
};

export const deleteAdmin = (id) => {
  return axios.delete(`${config.API.admins}${id}`);
};

export const editAdmin = (values) => {
  return axios.put(`${config.API.admins}${values._id}`, values)
    .then(res => res.data);
};