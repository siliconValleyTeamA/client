import axios from './axios';

export const getHistoryAPI = () => {
  return axios.get(`/api/user/history`);
};

export const createHistoryAPI = ({ projectId, point }) => {
  return axios.post(`/api/user/history`, { projectId, point });
};
