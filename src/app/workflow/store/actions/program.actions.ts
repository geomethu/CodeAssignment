import { Program } from '../../models/program.model';
import { Action } from '@ngrx/store';

export enum ProgramActionTypes {
    LOAD_PROGRAMS = '[Workflow] Load Programs',
    LOAD_PROGRAMS_SUCCESS = '[Workflow] Load Programs Success',
    LOAD_PROGRAMS_FAIL = '[Workflow] Load Programs Fail',

}

export class LoadPrograms implements Action {
    readonly type = ProgramActionTypes.LOAD_PROGRAMS;
}
export class LoadProgramsSuccess implements Action {
    readonly type = ProgramActionTypes.LOAD_PROGRAMS_SUCCESS;
    constructor(public payload: Program[]) { }
}

export class LoadProgramsFail implements Action {
    readonly type = ProgramActionTypes.LOAD_PROGRAMS_FAIL;
    constructor(public payload: string) { }
}

export type Action =
    | LoadPrograms
    | LoadProgramsSuccess
    | LoadProgramsFail;

