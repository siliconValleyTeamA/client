import axios from './axios';

export const createCartAPI = ({ projectId }) => {
  return axios.post(`/api/user/cart`, { projectId });
};
