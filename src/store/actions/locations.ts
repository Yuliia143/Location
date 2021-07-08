import { AppThunk } from '../index';
import {
  LOCATIONS_FAIL,
  LOCATIONS_LOADING,
  LOCATIONS_SUCCESS,
} from '../reducers/locations/types';
import { getProjects } from '../../api/projects';

export const loadLocations = (): AppThunk => async dispatch => {
  dispatch({ type: LOCATIONS_LOADING });
  try {
    await getProjects().then(response => {
      const locations = response.data.map((location: { lines: any[] }) => {
        console.log(location, 'Loc');
        return location.lines.reduce(
          (acc: any, item: any) => ({
            date: item.date,
            description: item.desc ? item.desc : '',
            array_options: item.array_options,
          }),
          [],
        );
      });
      return dispatch({
        type: LOCATIONS_SUCCESS,
        payload: locations,
      });
    });
  } catch (err) {
    console.log(err);
    return dispatch({ type: LOCATIONS_FAIL });
  }
};
