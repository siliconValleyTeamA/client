import axios from './axios';

export const logOutAPI = () => {
  return axios.post('api/user/logout');
};

export const logInAPI = () => {
  return axios.post('api/user/login');
};

export const getPointAPI = () => {
  return axios.get(`/api/user/point`);
};

export const chargePointAPI = point => {
  return axios.put(`/api/user/point`, { point });
};
