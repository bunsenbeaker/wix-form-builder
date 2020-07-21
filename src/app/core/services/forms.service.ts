import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private httpClient: HttpClient) { }

  public loadAllForms(){
    console.log('going to get some forms');
    return this.httpClient.get('http://localhost:4200/api/forms');
  }
}
