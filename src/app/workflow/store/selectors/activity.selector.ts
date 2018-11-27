import * as fromActivity from '../reducers/activity.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkflowState } from '..';

export const getWorkflowState = createFeatureSelector<WorkflowState>('workflow');

// ActivityState
export const getActivityState = createSelector(
  getWorkflowState,
  (state: WorkflowState) => state.activities
);

export const selectAllActivities = createSelector(
  getActivityState,
  fromActivity.selectAll
);
