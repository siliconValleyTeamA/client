import axios from './axios';

export const createCartAPI = ({ projectId, money }) => {
  return axios.post(`/api/user/cart`, { projectId, money });
};
