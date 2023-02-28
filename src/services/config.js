import axios from 'axios';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'production url'
      : 'http://localhost:3000',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default instance;
