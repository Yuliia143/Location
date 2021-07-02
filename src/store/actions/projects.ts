import { AppThunk } from '../index';
import {
  PROJECTS_LOADING,
  PROJECTS_SUCCESS,
  PROJECTS_FAIL,
} from '../reducers/projects/types';

export const loadProjects = (): AppThunk => async dispatch => {
  dispatch({ type: PROJECTS_LOADING });
  try {
    return dispatch({
      type: PROJECTS_SUCCESS,
      payload: [
        { id: '1', name: 'Project1' },
        { id: '2', name: 'Project2' },
        { id: '3', name: 'Project3' },
        { id: '4', name: 'Project4' },
        { id: '5', name: 'Project5' },
      ],
    });
    // await getProjects().then(response => {
    //   return dispatch({
    //     type: PROJECTS_SUCCESS,
    //     payload: response.data.projects,
    //   });
    // });
  } catch (err) {
    return dispatch({ type: PROJECTS_FAIL });
  }
};
