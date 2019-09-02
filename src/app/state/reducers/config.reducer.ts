import { ConfigActions, ConfigActionsTypes } from '../actions/config.actions';

export interface IConfigState {
  fetching: boolean;
  id: number;
  region: string;
  role: string;
}

export const initialConfigState: IConfigState = {
  fetching: false,
  id: null,
  region: null,
  role: null
};

export function configReducer(
  state: IConfigState = initialConfigState,
  action: ConfigActions
): IConfigState {
  switch (action.type) {
    case ConfigActionsTypes.FetchConfig:
      return {
        ...state,
        fetching: true
      };
    case ConfigActionsTypes.FetchConfigSuccess:
      const { id, region, role } = action.payload;

      return {
        fetching: false,
        id,
        region,
        role
      };
    case ConfigActionsTypes.FetchConfigFailure:
      return {
        ...state,
        fetching: false
      };
    default:
      return state;
  }
}

export const getId = (state: IConfigState) => state.id;
export const getRegion = (state: IConfigState) => state.region;
export const getRole = (state: IConfigState) => state.role;
