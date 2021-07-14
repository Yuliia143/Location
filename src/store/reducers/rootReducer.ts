import { combineReducers } from 'redux';
import { authReducer } from './auth/auth';
import { projectsReducer } from './projects/projects';
import { locationsReducer } from './locations/locations';
import { reportReducer } from './report/report';
import { notificationsReducer } from './notifications/notifications';

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  locations: locationsReducer,
  report: reportReducer,
  notifications: notificationsReducer,
});
