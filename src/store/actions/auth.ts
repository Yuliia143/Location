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

export const auth =
  (authOptions: AuthInterface): AppThunk =>
  async dispatch => {
    dispatch({ type: AUTH_LOADING });
    try {
      await signIn(authOptions).then(async response => {
        console.log(response);
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
      console.log(err.response.data.message);
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
