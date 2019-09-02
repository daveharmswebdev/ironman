import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IConfigState, configReducer } from '../state/reducers/config.reducer';

export const stateFeatureKey = 'state';

export interface AppState {
  configState: IConfigState;
}

export const reducers: ActionReducerMap<AppState> = {
  configState: configReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
