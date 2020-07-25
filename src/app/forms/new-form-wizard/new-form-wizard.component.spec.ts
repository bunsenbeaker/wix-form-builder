import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewFormWizardComponent } from './new-form-wizard.component';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';

describe('NewFormWizardComponent', () => {
  let component: NewFormWizardComponent;
  let fixture: ComponentFixture<NewFormWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormWizardComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
