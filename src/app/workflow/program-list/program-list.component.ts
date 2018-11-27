import { Program } from './../models/program.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
  @Input() programs: Program[];
  constructor() {}

  ngOnInit() {}
}
