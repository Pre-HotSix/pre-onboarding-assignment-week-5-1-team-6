import axios from 'axios';

const apiRoot = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
});

export const getSearchInfos = async (query: string) => {
  try {
    const { data } = await apiRoot(`/sick?q=${query}&_limit=7`);
    console.log('hi');
    localStorage.setItem(`${query}`, JSON.stringify(data));
    return data;
  } catch (err) {
    throw new Error('not found page');
  }
};
