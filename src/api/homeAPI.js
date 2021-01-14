import axios from './axios';

export const getScheduleProjectListAPI = () => {
  return axios.get(`/api/project/schedule`);
};

export const getSoonSuccessProjectListAPI = () => {
  return axios.get(`/api/project/success`);
};
