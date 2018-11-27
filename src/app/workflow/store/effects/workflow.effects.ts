import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as programActions from '../actions/program.actions';
import * as activityActions from '../actions/activity.actions';

import { WorkflowService } from '../../services/workflow.service'
import { Activity } from '../../models/activity.model';
import { Program } from '../../models/program.model';

@Injectable()
export class WorkflowEffect {
  constructor( private actions$: Actions,  private workflowService: WorkflowService) {}
  @Effect()
  loadPrograms$: Observable<Action> = this.actions$.pipe(
    ofType<programActions.LoadPrograms>(
      programActions.ProgramActionTypes.LOAD_PROGRAMS
    ),
    mergeMap((action: programActions.LoadPrograms) =>
      this.workflowService.getPrograms().pipe(
        map(
          (programs: Program[]) =>
            new programActions.LoadProgramsSuccess(programs)
        ),
        catchError(err => of(new programActions.LoadProgramsFail(err)))
      )
    )
  );

  @Effect()
  loadActivities$: Observable<Action> = this.actions$.pipe(
    ofType<activityActions.LoadActivities>(
      activityActions.ActivityActionTypes.LOAD_ACTIVITIES
    ),
    mergeMap((action: activityActions.LoadActivities) =>
      this.workflowService.getActivities().pipe(
        map(
          (activities: Activity[]) =>
            new activityActions.LoadActivitiesSuccess(activities)
        ),
        catchError(err => of(new activityActions.LoadActivitiesFail(err)))
      )
    )
  );


}
