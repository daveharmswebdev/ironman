import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ComicActions,
  FetchQuickList,
  ComicActionsTypes,
  FetchQuickListSuccess,
  FetchQuickListFailure,
  FetchUsers,
  FetchUsersSuccess,
  FetchUsersFailure,
  FetchComics,
  FetchComicsSuccess,
  FetchComicsFailure
} from '../actions/comic.actions';
import { IronService } from 'src/app/services/ironman.service';
import { Action, Store, select } from '@ngrx/store';
import {
  withLatestFrom,
  switchMap,
  map,
  catchError,
  tap,
  filter,
  mergeMap,
  takeUntil,
  takeWhile
} from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { selectId, selectRegion } from '../selectors/config.selectors';
import { of, Observable } from 'rxjs';

@Injectable()
export class ComicEffects {
  constructor(
    private actions$: Actions<ComicActions>,
    private store: Store<AppState>,
    private service: IronService
  ) {}

  @Effect()
  fetchQuickList$: Observable<Action> = this.actions$.pipe(
    ofType<FetchQuickList>(ComicActionsTypes.FetchQuicListOptions),
    withLatestFrom(this.store.pipe(select(selectId))),
    switchMap(([_, id]: [FetchQuickList, number]) => {
      return this.service.getQuicklist(id).pipe(
        map(list => {
          if (list.length) {
            return new FetchQuickListSuccess(list);
          } else {
            return new FetchQuickList();
          }
        }),
        catchError(error => of(new FetchQuickListFailure(error)))
      );
    })
  );

  @Effect()
  fetchUsers$: Observable<Action> = this.actions$.pipe(
    ofType<FetchUsers>(ComicActionsTypes.FetchUsers),
    withLatestFrom(this.store.pipe(select(selectId))),
    switchMap(([action, id]: [FetchUsers, number]) => {
      return this.service.getUsers(id, action.payload.role).pipe(
        map(users => new FetchUsersSuccess(users)),
        catchError(error => of(new FetchUsersFailure(error)))
      );
    })
  );

  @Effect()
  fetchComics$: Observable<Action> = this.actions$.pipe(
    ofType<FetchComics>(ComicActionsTypes.FetchComics),
    withLatestFrom(
      this.store.pipe(select(selectId)),
      this.store.pipe(select(selectRegion))
    ),
    switchMap(([{payload: {userId}}, siteId, region]: [FetchComics, number, string]) => {
      return this.service.getComics(userId, siteId, region).pipe(
        map(comics => new FetchComicsSuccess(comics)),
        catchError(error => of(new FetchComicsFailure(error)))
      );
    })
  );

}
