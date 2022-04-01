import axios from 'axios';
const API_URL = 'https://randomuser.me/api';

const request = (endpoint, method = 'GET', data = null) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (method === 'POST' || method === 'PATH') {
    config.body = JSON.stringify(data);
  }

  const url = `${API_URL}${endpoint}`;

  return axios({
    method,
    url,
    config,
    data,
  });
};

const get = (endpoint) => request(endpoint);
const post = (endpoint, data) => request(endpoint, 'POST', data);
const patch = (endpoint, data) => request(endpoint, 'PATCH', data);
const _delete = (endpoint) => request(endpoint, 'DELETE');

export default {
  get,
  post,
  patch,
  delete: _delete,
};
