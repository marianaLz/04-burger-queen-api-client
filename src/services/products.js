import axios from './config';

export const getProducts = () => {
  return axios.get('/products').then((res) => res.data);
};

export const createProduct = (product) => {
  return axios.post('/products', product).then((res) => res.data);
};

export const getProduct = (id) => {
  return axios.get(`/products/${id}`).then((res) => res.data);
};

export const updateProduct = (id, product) => {
  return axios.put(`/products/${id}`, product).then((res) => res.data);
};

export const deleteProduct = (id) => {
  return axios.delete(`/products/${id}`).then((res) => res.data);
};
