import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import {ClassItemsState, ClassItemsReducer} from './classitems.reducers'

import { environment } from '../../environments/environment';
import { ClassDescriptionState, ClassDescriptionReducer } from './class-description.reducers';

export interface State {
  classItems: ClassItemsState;
  classDescriptions: ClassDescriptionState;
}

export const reducers: ActionReducerMap<State> = {
  classItems: ClassItemsReducer,
  classDescriptions: ClassDescriptionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
