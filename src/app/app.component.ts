import { Component, OnInit } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { FetchConfig } from './state/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ironman';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchConfig(21));
  }
}
