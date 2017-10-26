import { createSelector } from 'reselect';
import { NAME } from './consts';

export const isAuthentificated = state => state[NAME].isAuthentificated;
export const hasErrored = state => state[NAME].hasErrored;