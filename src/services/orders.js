import axios from './config';

export const getOrders = () => {
  return axios.get('/orders').then((res) => res.data);
};

export const createOrder = (order) => {
  return axios.post('/orders', order).then((res) => res.data);
};

export const updateOrder = (id, order) => {
  return axios.put(`/orders/${id}`, order).then((res) => res.data);
};
