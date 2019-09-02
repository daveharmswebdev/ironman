import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromConfig from '../reducers/config.reducer';
import { AppState } from 'src/app/reducers';

export const selectAuthState = createFeatureSelector<
  AppState,
  fromConfig.IConfigState
>('configState');

export const selectId = createSelector(
  selectAuthState,
  fromConfig.getId
);

export const selectRegion = createSelector(
  selectAuthState,
  fromConfig.getRegion
);

export const selectRole = createSelector(
  selectAuthState,
  fromConfig.getRole
);
