import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async (param: string) => {
  console.info('calling api');
  return await api.get(`/sick?q=${param}`);
};
