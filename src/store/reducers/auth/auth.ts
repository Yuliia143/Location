import {
  UserState,
  AUTH_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  UserAction,
} from './types';

const initialState: UserState = {
  loading: false,
  userName: '',
  token: '',
};

export const authReducer = (
  state = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        loading: false,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: '',
        userName: '',
        loading: false,
      };
    case SIGN_OUT_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
