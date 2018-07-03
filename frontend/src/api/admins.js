import axios from 'axios';
import config from '../config';

import app from './feathers-setup';

const service = app.service('admins');

export const fetchAdmins = () => {
  return service.find()
    .then(res => res.data);
};

export const createAdmin = ({ 
  email, 
  password, 
  superuser, 
}) => {
  return service.create({
    email,
    password,
    superuser,
  });
};

export const deleteAdmin = (id) => {
  return axios.delete(`${config.API.admins}${id}`);
  //.then(res => res.data);
};

export const editAdmin = (values) => {
  return axios.put(`${config.API.admins}${values._id}`, values)
    .then(res => res.data);
};