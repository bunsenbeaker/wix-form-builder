import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private httpClient: HttpClient) { }

  public loadAllSubmissions(){
    console.log('fetching submissions');
    return this.httpClient.get('http://localhost:8080/api/submissions');
  }
}
