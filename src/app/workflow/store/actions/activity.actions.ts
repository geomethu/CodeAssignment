import { Activity } from '../../models/activity.model';
import { Action } from '@ngrx/store';

export enum ActivityActionTypes {
  LOAD_ACTIVITIES = '[Workflow] Load Activities',
  LOAD_ACTIVITIES_SUCCESS = '[Workflow] Load Activities Success',
  LOAD_ACTIVITIES_FAIL = '[Workflow] Load Activities Fail',
}

export class LoadActivities implements Action {
  readonly type = ActivityActionTypes.LOAD_ACTIVITIES;
}
export class LoadActivitiesSuccess implements Action {
  readonly type = ActivityActionTypes.LOAD_ACTIVITIES_SUCCESS;
  constructor(public payload: Activity[]) {}
}

export class LoadActivitiesFail implements Action {
  readonly type = ActivityActionTypes.LOAD_ACTIVITIES_FAIL;
  constructor(public payload: string) {}
}

export type Action = LoadActivities | LoadActivitiesSuccess | LoadActivitiesFail;
