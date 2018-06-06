import axios from 'axios';
import config from '../config';

export const fetchAdmins = () => {
  return axios.get(config.API.admins)
    //.then(res => console.log(res.data.data))
    .then(res => res.data.data);
};

export const createAdmin = (values) => {
  console.log(values);
  return axios.post(config.API.admins, values)
    .then(res => res.data);
};

export const deleteAdmin = (id) => {
  return axios.delete(`${config.API.admins}${id}`);
    //.then(res => res.data);
};

export const editAdmin = (values) => {
  return axios.put(`${config.API.admins}${values._id}`, values)
    .then(res => res.data);
};