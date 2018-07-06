//import config from '../config';

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

export const deleteAdmin = id => {
  return service.remove(id);
};

export const editAdmin = values => {
  return service.patch(values._id, values);
};