import { combineReducers } from 'redux';
import { authReducer } from './auth/auth';
import { projectsReducer } from './projects/projects';
import { locationsReducer } from './locations/locations';

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  locations: locationsReducer,
});
