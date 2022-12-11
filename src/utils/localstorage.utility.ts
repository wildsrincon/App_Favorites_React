export const setLocalStorages = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorages = (key: string) => {
  return localStorage.getItem(key);
};
