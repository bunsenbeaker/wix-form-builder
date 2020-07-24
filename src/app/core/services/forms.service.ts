import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private httpClient: HttpClient) { }

  public loadAllForms(){

    return this.httpClient.get('/api/forms');
  }


  public addForm(newForm: Form) {
    
    let body: HttpParams = new HttpParams();
    
    body = body.set('newForm', JSON.stringify(newForm));
        
    
    return this.httpClient.post('/api/forms', body);

  }
}
