import axios from './config';

export const login = (data) => {
  return axios.post('/login', data).then((res) => res.data);
};
