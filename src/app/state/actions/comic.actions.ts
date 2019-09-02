import { Action } from '@ngrx/store';
import { IQuickList, IUser, IComics } from '../models';

export enum ComicActionsTypes {
  FetchQuicListOptions = '[Ngrx Component] Fetch Quick List',
  FetchQuicListOptionsSuccess = '[Ngrx Effects] Fetch Quick List Success',
  FetchQuicListOptionsFailure = '[Ngrx Effects] Fetch Quick List Failure',
  FetchUsers = '[Ngrx Component] Fetch Users',
  FetchUsersSuccess = '[Ngrx Effects] Fetch Users Success',
  FetchUsersFailure = '[Ngrx Effects] Fetch Users Failure',
  FetchComics = '[Ngrx Component] Fetch Comics',
  FetchComicsSuccess = '[Ngrx Effects] Fetch Comics Success',
  FetchComicsFailure = '[Ngrx Effects] Fetch Comics Failure',
  SetPrice = '[Ngrx Component] Set Price',
  ClearFormOptions = '[Ngrx Component] Clear Form Options'
}

export class FetchQuickList implements Action {
  readonly type = ComicActionsTypes.FetchQuicListOptions;

  constructor(public payload?: any) {}
}
export class FetchQuickListSuccess implements Action {
  readonly type = ComicActionsTypes.FetchQuicListOptionsSuccess;

  constructor(public payload: IQuickList[]) {}
}
export class FetchQuickListFailure implements Action {
  readonly type = ComicActionsTypes.FetchQuicListOptionsFailure;

  constructor(public payload: any) {}
}
export class FetchUsers implements Action {
  readonly type = ComicActionsTypes.FetchUsers;

  constructor(public payload: { role: string }) {}
}
export class FetchUsersSuccess implements Action {
  readonly type = ComicActionsTypes.FetchUsersSuccess;

  constructor(public payload: IUser[]) {}
}
export class FetchUsersFailure implements Action {
  readonly type = ComicActionsTypes.FetchUsersFailure;

  constructor(public payload: any) {}
}
export class FetchComics implements Action {
  readonly type = ComicActionsTypes.FetchComics;

  constructor(public payload: { userId: number }) {}
}
export class FetchComicsSuccess implements Action {
  readonly type = ComicActionsTypes.FetchComicsSuccess;

  constructor(public payload: IComics[]) {}
}
export class FetchComicsFailure implements Action {
  readonly type = ComicActionsTypes.FetchComicsFailure;

  constructor(public payload: any) {}
}
export class SetPrice implements Action {
  readonly type = ComicActionsTypes.SetPrice;

  constructor(public payload: { price: number }) {}
}
export class ClearFormOptions implements Action {
  readonly type = ComicActionsTypes.ClearFormOptions;

  constructor(public payload?: any) {}
}

export type ComicActions =
  | FetchQuickList
  | FetchQuickListSuccess
  | FetchQuickListFailure
  | FetchUsers
  | FetchUsersSuccess
  | FetchUsersFailure
  | FetchComics
  | FetchComicsSuccess
  | FetchComicsFailure
  | SetPrice
  | ClearFormOptions;
