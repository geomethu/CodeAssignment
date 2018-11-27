import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'codeassignment';

  constructor(private router: Router) { }

  navigateToActivities() {
    this.router.navigate(['/workflow']);
  }
}
