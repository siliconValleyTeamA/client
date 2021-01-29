import axios from './axios';

export const getInvestmentAPI = () => {
  return axios.get(`/api/user/investment`);
};

export const createInvestmentAPI = ({ projectId }) => {
  return axios.post(`/api/user/investment`, { projectId });
};
