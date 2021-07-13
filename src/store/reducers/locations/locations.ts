import {
  LOCATIONS_FAIL,
  LOCATIONS_LOADING,
  LOCATIONS_SUCCESS,
  LocationsAction,
  LocationsState,
} from './types';
import { LocationsInterface } from '../../../interfaces/location.interface';

const initialState: LocationsState = {
  locations: {} as LocationsInterface,
  loading: false,
};

export const locationsReducer = (
  state = initialState,
  action: LocationsAction,
) => {
  switch (action.type) {
    case LOCATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case LOCATIONS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
