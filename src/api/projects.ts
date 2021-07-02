import { api, baseURL } from './api';

export const getProjects = () => {
  return api.get(`${baseURL}project_list`);
};
