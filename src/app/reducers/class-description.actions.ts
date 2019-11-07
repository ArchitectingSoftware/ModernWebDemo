import { createAction, props } from '@ngrx/store';
import { ClassDescription } from './class-description.model';

export const loadCourseDescriptions = createAction('[Course Item] Load Courses')
export const loadCourseSuccess = createAction('[Class Item]Load Course Success', props<{courses: ClassDescription[]}>())
export const loadCourseFailure = createAction('[Class Item]Load Course Failure', props<{error: Error}>())

export const deleteCourse = createAction('[Course Item] Delete Course', props<{id:number}>())
export const deleteCourseSuccess = createAction('[Class Item]Delete Course Success', props<{id:number}>())
export const deleteCourseFailure = createAction('[Class Item]Delete Course Failure', props<{error: Error}>())

