import axios from './axios';

export const getHistoryAPI = () => {
  return axios.get(`/api/user/history`);
};

export const createHistoryAPI = ({ projectId, money }) => {
  return axios.post(`/api/user/history`, { projectId, money });
};
