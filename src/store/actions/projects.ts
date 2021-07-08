import { AppThunk } from '../index';
import {
  PROJECTS_LOADING,
  PROJECTS_SUCCESS,
  PROJECTS_FAIL,
} from '../reducers/projects/types';
import { getProjects } from '../../api/projects';

export const loadProjects = (): AppThunk => async dispatch => {
  dispatch({ type: PROJECTS_LOADING });
  try {
    await getProjects().then(response => {
      const projects = response.data.map((project: any) => ({
        id: project.id,
        name: project.ref,
      }));
      return dispatch({
        type: PROJECTS_SUCCESS,
        payload: projects,
      });
    });
  } catch (err) {
    return dispatch({ type: PROJECTS_FAIL });
  }
};
