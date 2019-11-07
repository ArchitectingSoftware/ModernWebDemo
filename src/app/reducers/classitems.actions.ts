import { createAction, props } from '@ngrx/store';
import { ClassItem } from './classitems.model';
import { fromEventPattern } from 'rxjs';

export const getClassItems = createAction('Get Class Items')


export const createClassItem = createAction('[Class Item]Create Item', props<{item: ClassItem}>())
export const removeClassItem = createAction('[Class Item]Remove Item', props<{id: Number}>())

export const createClassItemSuccess = createAction('[Class Item]Create Item Success', props<{item: ClassItem}>())
