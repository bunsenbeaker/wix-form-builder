import { Component, OnInit } from '@angular/core';
import { Form } from '../core/models/form.model';
import { Store } from '@ngrx/store';
import { CreateNewForm } from '../core/store/actions/forms.actions';
import { Router} from '@angular/router';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  newForm: Form;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  formUpdated(form: Form): void{

    this.newForm = form;
  }

  addForm(): void {

    this.store.dispatch(CreateNewForm({
      newForm: this.newForm
    }));

    this.router.navigate(['/forms']);

  }

}
