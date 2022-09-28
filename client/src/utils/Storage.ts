import { Sick } from 'utils/Types';
import { ConvertToJson, ConvertToString } from './Convert';

export const Storage = {
  get: (key: string): Sick[] | null =>
    ConvertToJson(sessionStorage.getItem(key)),
  set: (key: string, data: object): void =>
    sessionStorage.setItem(key, ConvertToString(data)),
};
