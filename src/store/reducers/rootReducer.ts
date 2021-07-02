import { combineReducers } from 'redux';
import { authReducer } from './auth/auth';
import { projectsReducer } from './projects/projects';

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
});
