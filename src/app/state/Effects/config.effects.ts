import { Injectable } from '@angular/core';
import {
  ConfigActions,
  FetchConfig,
  ConfigActionsTypes,
  FetchConfigSuccess,
  FetchConfigFailure
} from '../actions/config.actions';
import { IronService } from 'src/app/services/ironman.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions<ConfigActions>,
    private service: IronService
  ) {}

  @Effect()
  fetchConfig$: Observable<Action> = this.actions$.pipe(
    ofType<FetchConfig>(ConfigActionsTypes.FetchConfig),
    switchMap(action => {
      return this.service.getConfig(action.payload).pipe(
        map(config => new FetchConfigSuccess(config)),
        catchError(error => of(new FetchConfigFailure(error)))
      );
    })
  );
}
