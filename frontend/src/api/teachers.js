//import config from '../config';

import app from './feathers-setup';

const service = app.service('teachers');

export const fetchTeachers = () => {
  return service.find()
    .then(res => res.data);
};

export const createTeacher = ({ 
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

export const deleteTeacher = id => {
  return service.remove(id);
};

export const editTeacher = values => {
  return service.patch(values._id, values);
};