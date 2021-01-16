import axios from './axios';

export const getJjimListAPI = () => {
  return axios.get(`/api/user/jjim`);
};

export const createJjimAPI = ({ projectId }) => {
  return axios.post(`/api/user/jjim`, { projectId });
};

export const removeJjimAPI = ({ projectId }) => {
  return axios.delete(`/api/user/jjim`, { data: { projectId } });
};
