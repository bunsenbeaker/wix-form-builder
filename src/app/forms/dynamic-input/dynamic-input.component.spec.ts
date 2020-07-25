import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicInputComponent} from './dynamic-input.component';

fdescribe('DynamicInputComponent', () => {
  let component: DynamicInputComponent;
  let fixture: ComponentFixture<DynamicInputComponent>;
  let label;
  let input;
  let emittedObj;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicInputComponent ],
      imports: [
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(DynamicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    label =  fixture.debugElement.query(By.css('#dlabel')).nativeElement;
    input =  fixture.debugElement.query(By.css('#dinput')).nativeElement;

    component.valueChanged.subscribe(val => {
      console.log('emitted ' + val);
      emittedObj = val;
    });

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper label by input field', () => {
    
    component.field = {
      name: 'fld1',
      input_type: 'text',
      label: 'my label'
    };
    
    fixture.detectChanges();
    
    expect(label.innerText).toBe('my label');
  });

  it('should emit proper value', () => {
    console.log(input);
    console.log(label);
    component.field = {
      name: 'fld1',
      input_type: 'text',
      label: 'my label'
    };
   
    component.dynputGroup.controls['input'].setValue('my input text');

    fixture.detectChanges();
   
    console.log(emittedObj);
    expect(emittedObj.name).toBe('fld1');
    expect(emittedObj.value).toBe('my input text');

  });

  
});
