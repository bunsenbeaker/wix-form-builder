import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TopnavComponent } from './topnav.component';
import { By } from '@angular/platform-browser';

fdescribe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;
  let store: MockStore;
  let topnav;

  const initialState = { router: {
    state: {
      url: '/'
    }
  } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavComponent ],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    const topnavdebug =  fixture.debugElement.query(By.css('#topnav'));

    if (topnavdebug) {
      topnav = topnavdebug.nativeElement;
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display topnav on homepage', () => {

    expect(topnav.hasAttribute('hidden')).toEqual(true);
  });

  it('should display topnav on formslist page', () => {

    store.setState({ router: { state: { url: '/forms'}} });
    fixture.detectChanges();

    expect(topnav.hasAttribute('hidden')).toEqual(false);

  });

  it('should display topnav on addform page', () => {

    store.setState({ router: { state: { url: '/addform'}} });
    fixture.detectChanges();

    expect(topnav.hasAttribute('hidden')).toEqual(false);

  });

  it('should display topnav on submissions page', () => {

    store.setState({ router: { state: { url: '/submissions'}} });
    fixture.detectChanges();

    expect(topnav.hasAttribute('hidden')).toEqual(false);
  });


  it('should display topnav on submissions page', () => {

    store.setState({ router: { state: { url: '/forms/5f1ab656a4248f59ac9528d7'}} });
    fixture.detectChanges();

    expect(topnav.hasAttribute('hidden')).toEqual(false);
  });
});
