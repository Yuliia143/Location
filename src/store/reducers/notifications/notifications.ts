import {
  NotificationsState,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  NotificationsAction,
} from './types';

const initialState: NotificationsState = {
  message: '',
};

export const notificationsReducer = (
  state = initialState,
  action: NotificationsAction,
) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
