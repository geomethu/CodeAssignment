import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as activityActions from '../store/actions/activity.actions';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss'],
})
export class ActivityCreateComponent implements OnInit {
  activityForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.activityForm = this.fb.group({
      name: [null, Validators.required],
      startdate: [null],
      enddate: [null],
    });
  }

  createActivity(model, isValid: boolean) {
    if (isValid) {
      this.store.dispatch(new activityActions.CreateActivity(model));
    }
  }
}
