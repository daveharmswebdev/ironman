import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromConfig from '../reducers/config.reducer';
import { AppState } from 'src/app/reducers';

export const selectConfigState = createFeatureSelector<
  AppState,
  fromConfig.IConfigState
>('configState');

export const selectId = createSelector(
  selectConfigState,
  fromConfig.getId
);

export const selectRegion = createSelector(
  selectConfigState,
  fromConfig.getRegion
);

export const selectRole = createSelector(
  selectConfigState,
  fromConfig.getRole
);
