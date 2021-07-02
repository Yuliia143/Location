import {
  ProjectsState,
  PROJECTS_LOADING,
  PROJECTS_SUCCESS,
  PROJECTS_FAIL,
  ProjectsAction,
} from './types';

const initialState: ProjectsState = {
  projects: [],
  loading: false,
};

export const projectsReducer = (
  state = initialState,
  action: ProjectsAction,
) => {
  switch (action.type) {
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
