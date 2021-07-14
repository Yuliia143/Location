import { AppThunk } from '../index';
import { AuthInterface } from '../../interfaces/auth.interface';
import {
  AUTH_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
} from '../reducers/auth/types';
import { signIn } from '../../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_NOTIFICATION } from '../reducers/notifications/types';

export const auth =
  (authOptions: AuthInterface): AppThunk =>
  async dispatch => {
    dispatch({ type: AUTH_LOADING });
    try {
      await signIn(authOptions).then(async response => {
        await AsyncStorage.setItem(
          'token',
          JSON.stringify(response.data.success.token),
        );
        return dispatch({
          type: SIGN_IN_SUCCESS,
          payload: { ...response.data.success, userName: authOptions.login },
        });
      });
    } catch (err) {
      dispatch({
        type: ADD_NOTIFICATION,
        payload: 'La password da te inserita è errata.\n' + 'Riprova',
      });
      return dispatch({ type: SIGN_IN_FAIL });
    }
  };

export const signOut = (): AppThunk => async dispatch => {
  dispatch({ type: AUTH_LOADING });
  try {
    await AsyncStorage.clear();
    return dispatch({ type: SIGN_OUT_SUCCESS });
  } catch (e) {
    return dispatch({ type: SIGN_OUT_FAIL });
  }
};
