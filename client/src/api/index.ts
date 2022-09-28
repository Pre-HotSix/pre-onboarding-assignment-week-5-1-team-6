import axios from 'axios';

export const apiRoot = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
});

const getSearch = async () => {
  const { data } = await apiRoot.get(`/sick`);

  return data;
};

export { getSearch };
