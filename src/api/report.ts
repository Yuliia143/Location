import { api, baseURL } from './api';
import { ReportInterface } from '../interfaces/report.interface';

export const postReport = (id: number, options: ReportInterface) => {
  return api.post(`${baseURL}interventions/${id}/lines`, options);
};
