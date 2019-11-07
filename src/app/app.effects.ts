import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {getClassItems} from './reducers/classitems.actions';

import {map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions ) {}

  //log =  createEffect(() => this.actions$.pipe(
  //  tap(action => console.log(action))
  //), {dispatch: false});


  //getClassItem = createEffect( () => this.actions$.pipe(
  //  ofType(getClassItem),
  //  map( a => getClassItem({id: a.id}))
  //));
}
