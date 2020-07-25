import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { AddFormFieldComponent } from './add-form-field.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddFormFieldComponent', () => {
  let component: AddFormFieldComponent;
  let fixture: ComponentFixture<AddFormFieldComponent>;
  let addButton;
  let typefield;
  let namefield;
  let labelfield;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormFieldComponent ],
      imports: [ BrowserAnimationsModule,
        FormsModule ,
         ReactiveFormsModule,
         MatFormFieldModule,
         MatButtonModule,
         MatInputModule,
         MatSelectModule
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    addButton =  fixture.debugElement.query(By.css('#addfield')).nativeElement;
    typefield = fixture.debugElement.query(By.css('#type')).nativeElement;
    namefield = fixture.debugElement.query(By.css('#name')).nativeElement;
    labelfield = fixture.debugElement.query(By.css('#label')).nativeElement;


   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('addbutton should be disabled before fields were filled', () => {
    
      expect(addButton).toHaveClass('mat-button-disabled');
  });

  it ('addfield form should be invalid when not all fields are filled',()=>{

    const form = component.newFieldGroup;

    expect(form.valid).toBe(false);


  });

  
  it ('addfield form should be valid when all fields are filled',()=>{

    const form = component.newFieldGroup;

    form.controls['input_type'].setValue('text');
    form.controls['name'].setValue('fld1');
    form.controls['label'].setValue('my text field');

    fixture.detectChanges();

    expect(form.valid).toBe(true);

    
  });


  it ('addfield form should emit form values when submitted',()=>{

    const form = component.newFieldGroup;

    form.controls['input_type'].setValue('text');
    form.controls['name'].setValue('fld1');
    form.controls['label'].setValue('my text field');

    fixture.detectChanges();
    let emittedObj;

    component.addField.subscribe(fields => {

      emittedObj = fields;
    });

    addButton.click();

    expect(emittedObj['input_type']).toBe('text');
    expect(emittedObj['name']).toBe('fld1');
    expect(emittedObj['label']).toBe('my text field'); 

    
  });



});



