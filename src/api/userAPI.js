import axios from './axios';

export const getPointAPI = () => {
  return axios.get(`/api/user/point`);
};
