import axios from './axios';

export const getCategoryListAPI = () => {
  return axios.get(`/api/category`);
};
