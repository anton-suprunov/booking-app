import { createSelector } from 'reselect';
import { NAME } from './consts';

export const getAdmins = state => {
  return state[NAME].allIds.map(id => state[NAME].byId[id]);
};

export const getAdmin = (state, adminId) => adminId ? state[NAME].byId[adminId] : undefined;