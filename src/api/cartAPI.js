import axios from './axios';

export const createCartAPI = ({ projectId }) => {
  return axios.post(`/api/user/carts`, { projectId });
};

export const modifyCartAPI = ({ projectId, point }) => {
  return axios.put('api/user/carts', { data: { projectId, point } });
};

export const removeCartAPI = ({ projectId }) => {
  return axios.delete(`/api/user/carts`, { data: { projectId } });
};

export const getProjectListInCartAPI = () => {
  return axios.get(`/api/user/carts`);
};
