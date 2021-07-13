import { ReportInterface } from '../../../interfaces/report.interface';
import { CoordinatesInterface } from '../../../interfaces/location.interface';

export const REPORT_LOADING = 'REPORT_LOADING';
export const REPORT_SUCCESS = 'REPORT_SUCCESS';
export const REPORT_FAIL = 'REPORT_FAIL';

interface ReportLoadingAction {
  type: typeof REPORT_LOADING;
}
interface ReportSuccessAction {
  type: typeof REPORT_SUCCESS;
  payload: ReportInterface;
}
interface ReportFailAction {
  type: typeof REPORT_FAIL;
}

export type ReportAction =
  | ReportLoadingAction
  | ReportSuccessAction
  | ReportFailAction;

export interface ReportState {
  loading: boolean;
  description: string;
  date: string;
  duree: number;
  array_options: CoordinatesInterface;
}
