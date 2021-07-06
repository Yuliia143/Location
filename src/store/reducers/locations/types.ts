import { LocationInterface } from '../../../interfaces/location.interface';

export const LOCATIONS_LOADING = 'LOCATIONS_LOADING';
export const LOCATIONS_SUCCESS = 'LOCATIONS_SUCCESS';
export const LOCATIONS_FAIL = 'LOCATIONS_FAIL';

interface LocationsLoadingAction {
  type: typeof LOCATIONS_LOADING;
}
interface LocationsSuccessAction {
  type: typeof LOCATIONS_SUCCESS;
  payload: LocationInterface[];
}
interface LocationsFailAction {
  type: typeof LOCATIONS_FAIL;
}

export type LocationsAction =
  | LocationsLoadingAction
  | LocationsSuccessAction
  | LocationsFailAction;

export interface LocationsState {
  loading: boolean;
  locations: LocationInterface[];
}
