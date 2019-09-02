import { Action } from '@ngrx/store';
import { IConfig } from '../models';

export enum ConfigActionsTypes {
  FetchConfig = '[AppComponent] Fetch Config',
  FetchConfigSuccess = '[Config Effects] Fetch Config Success',
  FetchConfigFailure = '[Config Effects] Fetch Config Failure'
}

export class FetchConfig implements Action {
  readonly type = ConfigActionsTypes.FetchConfig;

  constructor(public payload: number) {}
}

export class FetchConfigSuccess implements Action {
  readonly type = ConfigActionsTypes.FetchConfigSuccess;

  constructor(public payload: IConfig) {}
}

export class FetchConfigFailure implements Action {
  readonly type = ConfigActionsTypes.FetchConfigFailure;

  constructor(public payload: any) {}
}

export type ConfigActions =
  | FetchConfig
  | FetchConfigSuccess
  | FetchConfigFailure;
