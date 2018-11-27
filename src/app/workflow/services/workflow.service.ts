import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class WorkflowService {

  private url = 'https://dev-api.toladata.io/api/';

  constructor(private _http: HttpClient) {}

  getPrograms(): Observable<any> {
    return this._http.get(`${this.url}workflowlevel1/`)
  }
  getActivities(): Observable<any> {
    return this._http.get(`${this.url}workflowlevel2/`)
  }

}
