import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {getClassItems} from './reducers/classitems.actions';

import {map, switchMap, tap, mergeMap, catchError, exhaustMap} from 'rxjs/operators';
import { loadCourseDescriptions, 
          loadCourseSuccess, 
          loadCourseFailure,
          deleteCourse,
          deleteCourseFailure,
          deleteCourseSuccess, 
          addCourse,
          addCourseSuccess,
          addCourseFailure} from './reducers/class-description.actions';
import { CourseDescriptionService } from './redux-state-advanced/course-description.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private courseDescriptionService: CourseDescriptionService ) {}

  getCourseDescriptions = createEffect(
    () => this.actions$.pipe(
      ofType(loadCourseDescriptions),
      mergeMap(
        () => this.courseDescriptionService.getCourses()
          .pipe(
            tap( m => console.log('DEBUG   ', m)),
            map(data => loadCourseSuccess({courses: data})),
            catchError(error => of(loadCourseFailure({error:error})))
          )
      )
    )
  );

  removeCourse = createEffect(
    () => this.actions$.pipe(
      ofType(deleteCourse),
      exhaustMap(action =>
        this.courseDescriptionService.deleteCourse(action.id)
        .pipe(
          map(data => deleteCourseSuccess({id:action.id})),
          catchError(error => of(loadCourseFailure({error:error})))
        ))
    )
  );

  addCourse = createEffect(
    () => this.actions$.pipe(
      ofType(addCourse),
      exhaustMap(action =>
        this.courseDescriptionService.addCourse(action.course)
        .pipe(
          map(data => addCourseSuccess({course:action.course})),
          catchError(error => of(addCourseFailure({error:error})))
        ))
    )
  );
}
