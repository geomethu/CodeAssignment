import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkflowEffect } from './store/effects/workflow.effects';
import { reducers } from './store';
import { Routes, RouterModule } from '@angular/router';

import { ProgramComponent } from './program/program.component';
import { ProgramListComponent } from './program-list/program-list.component';


const routes: Routes = [
  { path: '', component: ProgramComponent }
];
@NgModule({
  declarations: [ProgramListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('workflow', reducers),
    EffectsModule.forFeature([WorkflowEffect]),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class WorkflowModule { }
