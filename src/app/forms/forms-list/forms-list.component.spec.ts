import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table'; 
import { RouterModule} from '@angular/router';
import { FormsListComponent } from './forms-list.component';
import { By } from '@angular/platform-browser';
import {FriendlyDatePipe   } from '../../shared/pipes/friendly-date.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';


describe('FormsListComponent', () => {
  let component: FormsListComponent;
  let fixture: ComponentFixture<FormsListComponent>;
  let store: MockStore;
  let forms;
  
  const initialState = {
    forms: [
      {
        _id: '5f1ab656a4248f59ac9528d7',
        name: 'my form',
        created: '2020-07-24T10:22:14.303Z',
        fields: [
          {
            _id: '5f1ab656a4248f59ac9528d8',
            name: 'fld1',
            input_type: 'color',
            label: 'my field'
          }
        ],
        __v: 0
      },
      {
        _id: '5f1ac0416a753e0017102388',

        name: 'my first heroku form',
        created: '2020-07-24T11:04:33.107Z',
        fields: [
          {
            _id: '5f1ac0416a753e0017102389',
            name: 'fld1',
            input_type: 'text',
            label: 'my name'
          }
        ],
        __v: 0
      },
      {
        _id: '5f1ae05e03c1433fe8476e89',
        name: 'my multiform',
        created: '2020-07-24T13:21:34.831Z',
        fields: [
          {
            _id: '5f1ae05e03c1433fe8476e8a',
            name: 'fld1',
            input_type: 'text',
            label: 'your text pls'
          },
          {
            _id: '5f1ae05e03c1433fe8476e8b',
            name: 'fld2',
            input_type: 'color',
            label: 'your color pls'
          },
          {
            _id: '5f1ae05e03c1433fe8476e8c',
            name: 'fld3',
            input_type: 'date',
            label: 'your date pls'
          },
          {
            _id: '5f1ae05e03c1433fe8476e8d',
            name: 'fld4',
            input_type: 'email',
            label: 'your eml pls'
          },
          {
            _id: '5f1ae05e03c1433fe8476e8e',
            name: 'fld5',
            input_type: 'tel',
            label: 'your tell'
          },
          {
            _id: '5f1ae05e03c1433fe8476e8f',
            name: 'fld6',
            input_type: 'number',
            label: 'num num num'
          }
        ],
        __v: 0
      }
    ],
    submissions: [
      {
        _id: '5f1add4603c1433fe8476e81',
        form_id: '5f1ab656a4248f59ac9528d7',
        submitted: '2020-07-24T13:08:22.874Z',
        data: [
          {
            _id: '5f1add4603c1433fe8476e82',
            name: 'fld1',
            value: '#af2c2c'
          }
        ],
        __v: 0
      },
      {
        _id: '5f1add7003c1433fe8476e83',
        form_id: '5f1ab656a4248f59ac9528d7',
        submitted: '2020-07-24T13:09:04.699Z',
        data: [
          {
            _id: '5f1add7003c1433fe8476e84',
            name: 'fld1',
            value: '#7a0000'
          }
        ],
        __v: 0
      },
      {
        _id: '5f1add8603c1433fe8476e85',
        form_id: '5f1ab656a4248f59ac9528d7',
        submitted: '2020-07-24T13:09:26.639Z',
        data: [
          {
            _id: '5f1add8603c1433fe8476e86',
            name: 'fld1',
            value: '#0000de'
          }
        ],
        __v: 0
      },
      {
        _id: '5f1addaf03c1433fe8476e87',
        form_id: '5f1ab656a4248f59ac9528d7',
        submitted: '2020-07-24T13:10:07.261Z',
        data: [
          {
            _id: '5f1addaf03c1433fe8476e88',
            name: 'fld1',
            value: '#000000'
          }
        ],
        __v: 0
      }
    ]
  };



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsListComponent ],
      imports: [MatIconModule,
                MatTableModule,
                RouterTestingModule,
                AppModule
                ],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);    

    fixture.detectChanges();

    component.forms$.subscribe(val => {
      forms  = val;
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formslist count should match forms in store ', ()=>{

    

    expect(forms.length).toBe(initialState.forms.length);

  });


  it('form submission count should match submissions in store ', ()=>{

    const subbtn =  fixture.debugElement.query(By.css('.subcount')).nativeElement;
    expect(subbtn.innerText).toBe(''+initialState.submissions.length);

  });

  

});
