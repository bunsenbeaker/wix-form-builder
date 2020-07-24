import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Form } from '../../core/models/form.model';
import { Observable } from 'rxjs';
import { selectAllForms } from '../../core/store/selectors/formbuilder.selectors';


@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  forms$: Observable<Array<Form>>;

  displayedColumns: string[] = ['id', 'name', 'created', 'fieldcount', 'preview'];

  constructor(private store: Store) { }

  ngOnInit(): void {

   

    this.forms$ = this.store.pipe(select(selectAllForms));

  }

}
