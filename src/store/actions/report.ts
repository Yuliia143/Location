import { AppThunk } from '../index';
import { postReport } from '../../api/report';
import { ReportInterface } from '../../interfaces/report.interface';
import {
  REPORT_LOADING,
  REPORT_SUCCESS,
  REPORT_FAIL,
  SET_CREATED,
} from '../reducers/report/types';

export const sendReport =
  (id: number, options: ReportInterface): AppThunk =>
  async dispatch => {
    dispatch({ type: REPORT_LOADING });
    try {
      await postReport(id, options).then(response => {
        dispatch({ type: SET_CREATED, payload: true });
        return dispatch({
          type: REPORT_SUCCESS,
          payload: response,
        });
      });
    } catch (err) {
      return dispatch({ type: REPORT_FAIL });
    }
  };
