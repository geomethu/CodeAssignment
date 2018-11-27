import { ActivityState } from './activity.reducer';
import { Activity } from '../../models/activity.model';
import * as activityActions from '../actions/activity.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export interface ActivityState extends EntityState<Activity> {
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const activityAdapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const defaultProgram: ActivityState = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    error: ''
};

export const initialState = activityAdapter.getInitialState(defaultProgram);


export function activityReducer(state = initialState, action: activityActions.Action): ActivityState {
    switch (action.type) {
        case activityActions.ActivityActionTypes.LOAD_ACTIVITIES: {
            return {
                ...state,
                loading: true
            };
        }
        case activityActions.ActivityActionTypes.LOAD_ACTIVITIES_SUCCESS: {
            console.log(state);
            return activityAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }

        case activityActions.ActivityActionTypes.LOAD_ACTIVITIES_FAIL: {
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
} = activityAdapter.getSelectors();

export const getActivityLoaded = (state: ActivityState) => state.loaded;
export const getActivityLoading = (state: ActivityState) => state.loading;
