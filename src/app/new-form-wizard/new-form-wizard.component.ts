import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import { Form, FormElement } from '../core/models/form.model';
import { FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-new-form-wizard',
  templateUrl: './new-form-wizard.component.html',
  styleUrls: ['./new-form-wizard.component.css']
})
export class NewFormWizardComponent implements OnInit, OnDestroy {

  @Output() newFormChanged = new EventEmitter<Partial<Form>>();
  @Output() newFormWizardCompleted = new EventEmitter();

  newFormNameGroup: FormGroup;

  private newForm: Partial<Form> = {};

  private unsubscriber = new Subject();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.newFormNameGroup = this.formBuilder.group({
      formName: ['', Validators.required]
    });

    this.newFormNameGroup.get('formName').valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(newName => {
      this.newForm.name = newName;
      this.newFormUpdated();
    });
  }

  newFormUpdated(): void {
    this.newFormChanged.emit(this.newForm);
  }

  addField(newField: FormElement) {

    if (!this.newForm.elements) {
      this.newForm.elements = [];
    }
    this.newForm.elements = [...this.newForm.elements, newField];
    this.newFormUpdated();

  }

  
  submitNewForm(): void{

  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
