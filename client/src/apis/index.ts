import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async () => {
  return await api.get('/sick');
};
