export const getLocalStorageItem = (key) =>
  JSON.parse(localStorage.getItem(key));

export const setLocalStorageItem = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
