import { IQuickList, IComics, IUser } from '../models';
import { ComicActions, ComicActionsTypes } from '../actions/comic.actions';

export interface IComicState {
  quickListOptions: IQuickList[];
  users: IUser[];
  comics: IComics[];
  price: number;
}

export const initialComicState: IComicState = {
  quickListOptions: [],
  users: [],
  comics: [],
  price: null
}

export function comicReducer(
  state: IComicState = initialComicState,
  action: ComicActions
): IComicState {
  switch (action.type) {
    case ComicActionsTypes.FetchQuicListOptionsSuccess:
      return {
        ...state,
        quickListOptions: action.payload
      };
    case ComicActionsTypes.FetchUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case ComicActionsTypes.FetchComicsSuccess:
      return {
        ...state,
        comics: action.payload
      };
    case ComicActionsTypes.SetPrice:
      return {
        ...state,
        price: action.payload.price
      };
    case ComicActionsTypes.ClearFormOptions:
      return {
        ...state,
        users: [],
        comics: [],
        price: null
      };
    default:
      return state;
  }
}

export const getQuickListOptions = (state: IComicState) => state.quickListOptions;
export const getUsers = (state: IComicState) => state.users;
export const getComics = (state: IComicState) => state.comics;
export const getPrice = (state: IComicState) => state.price;