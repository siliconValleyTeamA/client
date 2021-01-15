import axios from './axios';

export const getPointAPI = () => {
  return axios.get(`/api/user/point`);
};

export const getLanguageAPI = () => {
  return axios.get(`/api/user/language`);
};

export const chargePointAPI = ({point}) => {
  return axios.post(`/api/user/points`, {point});
};

export const fundingAPI = ({projectId, point}) => {
  return axios.post(`/api/user/fundings`,{projectId, point});
};

export const logOutAPI = () => {
  return axios.post('api/user/logout');
};

export const logInAPI = () => {
  return axios.post('api/user/login');
};
