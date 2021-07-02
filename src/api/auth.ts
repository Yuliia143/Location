import { api, baseURLAnon } from './api';
import { AuthInterface } from '../interfaces/auth.interface';

export const signIn = (authOptions: AuthInterface) => {
  return api.post(`${baseURLAnon}login`, authOptions);
};
