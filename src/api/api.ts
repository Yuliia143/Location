import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../store';

export const baseURL = 'https://sogema.soluzionitop.com/api/index.php/';

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    dataType: 'text',
  },
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (store.getState().auth.token) {
    config.headers.DOLAPIKEY = `${store.getState().auth.token}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//       store.dispatch({ type: SIGN_OUT_SUCCESS });
//     }
//     return Promise.reject();
//   },
// );
