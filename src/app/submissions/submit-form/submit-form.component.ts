import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Form } from 'src/app/core/models/form.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as Selectors from '../../core/store/selectors/formbuilder.selectors';
import { Submission } from 'src/app/core/models/submission.model';
import * as SubmissionActions from '../../core/store/actions/submissions.actions';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  form$: Observable<Form>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if (p.id) {
        this.form$ = this.store.pipe(select(Selectors.selectFormById, { formId: p.id}));
      }
    });
  }

  submitForm(newSubmission: Submission) {
    this.store.dispatch(SubmissionActions.SubmitForm({newSubmission}));
    this.router.navigate(['/forms']);
  }

}
