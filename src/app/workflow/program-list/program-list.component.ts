import { Program } from './../models/program.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
  @Input() programs: Program[];
  activities$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  loadActivities() {
    this.activities$ = this.store.pipe(select(selectActivitiesByProgramId))
  }
}


