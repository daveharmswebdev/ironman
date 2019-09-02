import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IConfigState, configReducer } from '../state/reducers/config.reducer';
import { IComicState, comicReducer } from '../state/reducers/comic.reducer';

export const stateFeatureKey = 'state';

export interface AppState {
  configState: IConfigState;
  comicState: IComicState;
}

export const reducers: ActionReducerMap<AppState> = {
  configState: configReducer,
  comicState: comicReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
