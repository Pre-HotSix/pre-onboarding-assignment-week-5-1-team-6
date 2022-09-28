export const Storage = {
  get: (key: string): string | null => sessionStorage.getItem(key),
  set: (key: string, data: string): void => sessionStorage.setItem(key, data),
};
