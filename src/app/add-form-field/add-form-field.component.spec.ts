import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormFieldComponent } from './add-form-field.component';

describe('AddFormFieldComponent', () => {
  let component: AddFormFieldComponent;
  let fixture: ComponentFixture<AddFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
