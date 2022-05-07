import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalscorersService {

  constructor(private httpClient: HttpClient) { }



  getGoalscorerData(): Observable<any>{
    return this.httpClient
      // eslint-disable-next-line max-len
      .get('https://app.sportdataapi.com/api/v1/soccer/seasons/496?apikey=6ffd7490-ce34-11ec-a93d-4f684168c34a');

  }

}
