import { Component, OnInit } from '@angular/core';
import { Form } from './core/models/form.model';
import { Submission } from './core/models/submission.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wix-form-builder';
  /**
   *
   */
  constructor() {
    
  }
  ngOnInit(): void{

  }

  
}
