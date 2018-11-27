import * as fromProgram from './program.reducer';
import * as fromActivity from './activity.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface WorkflowState {
    programs: fromProgram.ProgramState;
    activities: fromActivity.ActivityState;
}

export const reducers: ActionReducerMap<WorkflowState> = {
    programs: fromProgram.programReducer,
    activities: fromActivity.activityReducer,
}
