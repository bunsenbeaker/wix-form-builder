import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FormField } from '../../core/models/form.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { SubmittedField } from 'src/app/core/models/submission.model';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit, OnDestroy {

  @Input() field: FormField;

  @Output() valueChanged = new EventEmitter<SubmittedField>();

  dynputGroup: FormGroup;

  private unsubscriber = new Subject();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.dynputGroup = this.formBuilder.group({
      input: ['', Validators.required]
    });

    this.dynputGroup.get('input').valueChanges.pipe(takeUntil(this.unsubscriber)).subscribe(newValue => {
      this.valueChanged.emit({name: this.field.name, value: newValue });
    });
  }

  ngOnDestroy(): void {

    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
