import { ReportInterface } from '../../../interfaces/report.interface';
import { CoordinatesInterface } from '../../../interfaces/location.interface';

export const REPORT_LOADING = 'REPORT_LOADING';
export const REPORT_SUCCESS = 'REPORT_SUCCESS';
export const REPORT_FAIL = 'REPORT_FAIL';
export const SET_CREATED = 'SET_CREATED';

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
interface ReportSetCreatedAction {
  type: typeof SET_CREATED;
  payload: boolean;
}

export type ReportAction =
  | ReportLoadingAction
  | ReportSuccessAction
  | ReportFailAction
  | ReportSetCreatedAction;

export interface ReportState {
  loading: boolean;
  isCreated: boolean;
  description: string;
  date: string;
  duree: number;
  array_options: CoordinatesInterface;
}
