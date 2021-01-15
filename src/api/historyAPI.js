import axios from './axios';

export const getHistoryList = () => {
  return axios.get(`/api/user/history`);
};