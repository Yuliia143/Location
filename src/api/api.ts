import axios from 'axios';

export const baseURLAnon = 'http://mockup.soluzionitop.com:8080/an_projects/';
export const baseURL = 'http://mockup.soluzionitop.com:8080/projects/';

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    dataType: 'text',
  },
});

// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   if (store.getState().auth.token)
//     config.headers.Authorization = `Bearer 8|lC2DkXgfzA`;
//   return config;
// });

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
