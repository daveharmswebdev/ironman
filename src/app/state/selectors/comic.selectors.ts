import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromComic from '../reducers/comic.reducer';
import { AppState } from 'src/app/reducers';

export const selectComicState = createFeatureSelector<
  AppState,
  fromComic.IComicState
>('comicState');

export const selectQuickListOptions = createSelector(
  selectComicState,
  fromComic.getQuickListOptions
);

export const selectUsers = createSelector(
  selectComicState,
  fromComic.getUsers
);

export const selectComics = createSelector(
  selectComicState,
  fromComic.getComics
);

export const selectPrice = createSelector(
  selectComicState,
  fromComic.getPrice
);
