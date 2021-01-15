import axios from './axios';

export const getPointAPI = () => {
  return axios.get(`/api/user/point`);
};

export const getHistoryAPI = () => {
  return axios.get(`/api/user/history`);
};

export const getLanguageAPI = () => {
  return axios.get(`/api/user/language`);
};

export const logOutAPI = () => {
  return axios.post('api/user/logout');
};

export const logInAPI = () => {
  return axios.post('api/user/login');
};
