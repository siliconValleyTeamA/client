import axios from './axios';

export const getUserAPI = () => {
  return axios.get('/api/user');
};

export const logOutAPI = () => {
  return axios.get('/auth/logout');
};