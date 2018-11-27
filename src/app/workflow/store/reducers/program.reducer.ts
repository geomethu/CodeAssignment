import { Program } from '../../models/program.model';
import * as programActions from '../actions/program.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ProgramState extends EntityState<Program> {
    loading: boolean;
    loaded: boolean;
    error: string;
}


export const programAdapter: EntityAdapter<Program> = createEntityAdapter<Program>();

export const defaultProgram: ProgramState = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    error: ''
};

export const initialState = programAdapter.getInitialState(defaultProgram);


export function programReducer(state = initialState, action: programActions.Action): ProgramState {
    switch (action.type) {
        case programActions.ProgramActionTypes.LOAD_PROGRAMS: {
            return {
                ...state,
                loading: true
            };
        }
        case programActions.ProgramActionTypes.LOAD_PROGRAMS_SUCCESS: {
            return programAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }

        case programActions.ProgramActionTypes.LOAD_PROGRAMS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

    }
}


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal,
} = programAdapter.getSelectors();

export const getProgramsLoaded = (state: ProgramState) => state.loaded;
export const getProgramsLoading = (state: ProgramState) => state.loading;