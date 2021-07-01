import { UserState } from './types';

const initialState: UserState = {};

export const authReducer = (
  state = initialState,
  action: { type: string; payload?: any },
): UserState => {
  return state;
};
