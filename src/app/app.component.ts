import { Component, OnInit } from '@angular/core';
import { Form } from './core/models/form.model';
import { Submission } from './core/models/submission.model';
import { Store } from '@ngrx/store';
import * as FormsActions from './core/store/actions/forms.actions';
import * as SubmissionsActions from './core/store/actions/submissions.actions';

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
  constructor(private store: Store) {
    
  }
  ngOnInit(): void{
    this.store.dispatch(FormsActions.LoadAll());
    this.store.dispatch(SubmissionsActions.LoadAll());
  }

  
}
