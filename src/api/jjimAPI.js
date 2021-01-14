import axios from './axios';

export const removeJjimAPI = ({ projectId }) => {
  return axios.delete(`/api/user/jjim`, { data: { projectId } });
};
