import {
  ReportState,
  REPORT_LOADING,
  REPORT_SUCCESS,
  REPORT_FAIL,
  ReportAction,
  SET_CREATED,
} from './types';
import { CoordinatesInterface } from '../../../interfaces/location.interface';

const initialState: ReportState = {
  description: '',
  date: '',
  duree: 0,
  array_options: {} as CoordinatesInterface,
  loading: false,
  isCreated: false,
};

export const reportReducer = (state = initialState, action: ReportAction) => {
  switch (action.type) {
    case REPORT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REPORT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SET_CREATED:
      return {
        ...state,
        isCreated: action.payload,
      };
    default:
      return state;
  }
};
