import { Storage } from './Storage';

export const CheckCache = (key: string): boolean => {
  const cacheData = Storage.get(key);

  return cacheData ? true : false;
};
