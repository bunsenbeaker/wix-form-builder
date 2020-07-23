import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Submission } from '../core/models/submission.model';
import { Form } from '../core/models/form.model';
import * as Selectors from '../core/store/selectors/formbuilder.selectors';


@Component({
  selector: 'app-submissions-list',
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.css']
})
export class SubmissionsListComponent implements OnInit, OnDestroy {

  submissions$: Observable<any>;


  private unsubscriber = new Subject();

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      if (p.id) {
        this.submissions$ = this.store.pipe(select(Selectors.submissionsDisplayData, { formId: p.id}));
      }
    });


  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
