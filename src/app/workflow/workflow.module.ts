import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WorkflowEffect } from './store/effects/workflow.effects';
import { reducers } from './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('workflow', reducers),
    EffectsModule.forFeature([WorkflowEffect]),
    HttpClientModule,
  ]
})
export class WorkflowModule { }
