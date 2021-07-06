import { AppThunk } from '../index';
import {
  LOCATIONS_FAIL,
  LOCATIONS_LOADING,
  LOCATIONS_SUCCESS,
} from '../reducers/locations/types';
import { getLocations } from '../../api/locations';

export const loadLocations = (): AppThunk => async dispatch => {
  dispatch({ type: LOCATIONS_LOADING });
  try {
    return dispatch({
      type: LOCATIONS_SUCCESS,
      payload: [
        {
          id: 1,
          date: 1619420400,
          desc: 'Posa tubo TAZ\\r\\nPosa tubo RK\\r\\nPosa di canaletta in VTR\\r\\nSott.equip.tubo esistente\\r\\nSott.equip.tubo esist.succ. al 1° N…….\\r\\nPredisposiz. raccordi tratto vertic.\\r\\nPredisposiz. raccordi tratto vertic. Succ. al 1°\\r\\nPosa/sostituz. colonnino strad.\\r\\nPosa box a muro PTE\\r\\nRipristino integr. tub. esist (BUCA)\\r\\n',
          array_options: {
            options_latitudine: '111',
            options_longitudine: '112',
          },
        },
        {
          id: 2,
          date: 1619420400,
          desc: 'Posa tubo TAZ\\r\\nPosa tubo RK\\r\\nPosa di canaletta in VTR\\r\\nSott.equip.tubo esistente\\r\\nSott.equip.tubo esist.succ. al 1° N…….\\r\\nPredisposiz. raccordi tratto vertic.\\r\\nPredisposiz. raccordi tratto vertic. Succ. al 1°\\r\\nPosa/sostituz. colonnino strad.\\r\\nPosa box a muro PTE\\r\\nRipristino integr. tub. esist (BUCA)\\r\\n',
          array_options: {
            options_latitudine: '111',
            options_longitudine: '112',
          },
        },
      ],
    });
    // await getLocations().then(response => {
    //   return dispatch({
    //     type: LOCATIONS_SUCCESS,
    //     payload: response.data.projects,
    //   });
    // });
  } catch (err) {
    return dispatch({ type: LOCATIONS_FAIL });
  }
};
