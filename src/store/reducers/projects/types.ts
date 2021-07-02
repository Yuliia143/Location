import { ProjectInterface } from '../../../interfaces/project.interface';

export const PROJECTS_LOADING = 'PROJECTS_LOADING';
export const PROJECTS_SUCCESS = 'PROJECTS_SUCCESS';
export const PROJECTS_FAIL = 'PROJECTS_FAIL';

interface ProjectsLoadingAction {
  type: typeof PROJECTS_LOADING;
}
interface ProjectsSuccessAction {
  type: typeof PROJECTS_SUCCESS;
  payload: ProjectInterface[];
}
interface ProjectsFailAction {
  type: typeof PROJECTS_FAIL;
}

export type ProjectsAction =
  | ProjectsLoadingAction
  | ProjectsSuccessAction
  | ProjectsFailAction;

export interface ProjectsState {
  loading: boolean;
  projects: ProjectInterface[];
}
