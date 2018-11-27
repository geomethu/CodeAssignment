import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromPrograms from '../store';
import * as programActions from '../store/actions/program.actions';
import { selectAllPrograms } from './../store/selectors/program.selector'

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  programs$: Observable<any>;
  constructor(private store: Store<fromPrograms.WorkflowState>) {}

  ngOnInit() {
    this.store.dispatch(new programActions.LoadPrograms());
    this.programs$ = this.store.pipe(select(selectAllPrograms));
  }
}
