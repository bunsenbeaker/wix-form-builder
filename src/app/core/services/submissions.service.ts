import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Submission } from '../models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private httpClient: HttpClient) { }

  public loadAllSubmissions(){
    console.log('fetching submissions');
    return this.httpClient.get('/api/submissions');
  }

  public submit(newSubmission: Submission) {
    let body: HttpParams = new HttpParams();
    const form_id: string = newSubmission.form_id;
    const data: string = JSON.stringify(newSubmission.data);

    body = body.set('form_id', form_id);
    body = body.set('data', data);

    return this.httpClient.post('/api/submissions', body);
  }
}
