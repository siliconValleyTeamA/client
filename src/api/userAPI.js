import axios from './axios';

export const getUserAPI = () => {
  return axios.get('api/user');
};

export const logOutAPI = () => {
  return axios.post('api/user/logout');
};

export const getPointAPI = () => {
  return axios.get(`/api/user/point`);
};

export const chargePointAPI = point => {
  return axios.put(`/api/user/point`, { point });
};
