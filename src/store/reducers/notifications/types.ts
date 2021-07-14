export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

interface NotificationsAddAction {
  type: typeof ADD_NOTIFICATION;
  payload: string;
}
interface NotificationsRemoveAction {
  type: typeof REMOVE_NOTIFICATION;
}

export type NotificationsAction =
  | NotificationsAddAction
  | NotificationsRemoveAction;

export interface NotificationsState {
  message: string;
}
