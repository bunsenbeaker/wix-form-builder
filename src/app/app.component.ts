import { Component, OnInit } from '@angular/core';
import { Form } from './core/models/form.model';
import { Submission } from './core/models/submission.model';
import { Store } from '@ngrx/store';
import * as FormsActions from './core/store/actions/forms.actions';
import * as SubmissionsActions from './core/store/actions/submissions.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Wix Form Builder';
  /**
   *
   */
  constructor(private store: Store, private snack: MatSnackBar) {
    
  }
  ngOnInit(): void{
    this.store.dispatch(FormsActions.LoadAll());
    this.store.dispatch(SubmissionsActions.LoadAll());


  }

  
}
