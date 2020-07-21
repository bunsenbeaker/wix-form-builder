import { Component, OnInit } from '@angular/core';
import { Form } from './core/models/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wix-form-builder';
  form: Partial<Form>;
  /**
   *
   */
  constructor() {
    
  }
  ngOnInit(): void{

  }

  formUpdated(form: Partial<Form>): void{

      this.form = form;
  }
}
