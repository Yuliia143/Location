import { api, baseURL } from './api';
import { AuthInterface } from '../interfaces/auth.interface';

export const signIn = (authOptions: AuthInterface) => {
  return api.post(`${baseURL}login`, authOptions);
};
