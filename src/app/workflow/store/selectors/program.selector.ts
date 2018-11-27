import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkflowState } from '..';
import * as fromProgram from '../reducers/program.reducer';

export const getWorkflowState = createFeatureSelector<WorkflowState>('workflow');

// ProgramState
export const getProgramState = createSelector(
    getWorkflowState,
    (state: WorkflowState) => state.programs
);

export const selectAllPrograms = createSelector(
    getProgramState,
    fromProgram.selectAll
);

export const selectProgramsLoaded = createSelector(
    getProgramState,
    fromProgram.getProgramsLoaded
);

export const selectTotalPrograms = createSelector(
    getProgramState,
    fromProgram.selectTotal
);
