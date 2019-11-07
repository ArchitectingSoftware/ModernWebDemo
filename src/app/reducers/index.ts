import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import {ClassItemsState, ClassItemsReducer} from './classitems.reducers'

import { environment } from '../../environments/environment';

export interface State {
  classItems: ClassItemsState;
}

export const reducers: ActionReducerMap<State> = {
  classItems: ClassItemsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
