export const AUTH_LOADING = 'AUTH_LOADING';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';

interface AuthLoadingAction {
  type: typeof AUTH_LOADING;
}
interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: AuthAnswer;
}
interface SignInFailAction {
  type: typeof SIGN_IN_FAIL;
}
interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}
interface SignOutFailAction {
  type: typeof SIGN_OUT_FAIL;
}

interface AuthAnswer {
  token: string;
  userName: string;
}

export type UserAction =
  | AuthLoadingAction
  | SignInSuccessAction
  | SignInFailAction
  | SignOutSuccessAction
  | SignOutFailAction;

export interface UserState {
  loading: boolean;
  userName: string;
  token: string;
}
