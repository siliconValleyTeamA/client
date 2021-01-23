import axios from './axios';

export const getScheduleProjectListAPI = () => {
  return axios.get(`/api/project/schedule`);
};

export const getSoonSuccessProjectListAPI = () => {
  return axios.get(`/api/project/success`);
};

export const getPopularProjectAPI = () => {
  return axios.get(`/api/project/popular`);
};

export const getCategoryProjectAPI = ({ categoryId, filterType }) => {
  return axios.get(`/api/project/category/${categoryId}/${filterType}`);
};

export const getProjectDetailAPI = ({ projectId }) => {
  return axios.get(`/api/project/${projectId}`);
};

export const getProjectUserJjimAPI = ({ projectId }) => {
  return axios.get(`/api/project/${projectId}/jjim`);
};

export const createPorjectInfoAPI = info => {
  return axios.post(`/api/project/projectinfo`, info);
};
