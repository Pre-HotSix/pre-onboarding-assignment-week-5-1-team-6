import { Sick } from 'utils/Types';

export const ConvertToString = (json: object): string => JSON.stringify(json);

export const ConvertToJson = (data: string | null): Sick[] | null =>
  data !== null ? JSON.parse(data) : null;
