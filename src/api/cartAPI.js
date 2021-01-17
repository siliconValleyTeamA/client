import axios from './axios';

export const getProjectListInCartAPI = () => {
  return axios.get(`/api/user/carts`);
};

export const createCartAPI = ({ projectId, point }) => {
  return axios.post(`/api/user/carts`, { projectId, point });
};

export const modifyCartAPI = ({ cartId, point }) => {
  return axios.put('api/user/carts', { cartId, point });
};

export const removeCartAPI = ({ cartId }) => {
  return axios.delete(`/api/user/carts`, { data: { cartId } });
};
