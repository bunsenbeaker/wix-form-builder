import { Component, OnInit } from '@angular/core';
import { getSelectors  } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUrl} from '../../../core/store/selectors/router.selectors';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  url$: Observable<string>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {

    this.url$ = this.store.pipe(select(selectUrl));

  }
  
}
