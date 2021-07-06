import { api, baseURL } from './api';

export const getLocations = () => {
  return api.get(`${baseURL}locations`);
};
