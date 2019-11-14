import { createReducer, on, Action } from '@ngrx/store'
import { loadCourseDescriptions,
            loadCourseSuccess, 
            loadCourseFailure,
            deleteCourse,
            deleteCourseSuccess,
            deleteCourseFailure,
            addCourse,
            addCourseSuccess,
            addCourseFailure} from './class-description.actions'
import { ClassDescription } from './class-description.model';


export interface ClassDescriptionState{
    descriptions: ClassDescription[];
    error: Error | undefined;
    loading: boolean;
}

const initialState: ClassDescriptionState = {
    descriptions: [],
    error: undefined,
    loading: false
}

const myClassDescriptionsReducer = createReducer(initialState,
    on (loadCourseDescriptions, (state) => {
        console.log('in load course descriptiosn reducer')
        return {...state, loading:true, error:undefined};
    }),
    on (loadCourseSuccess, (state, action) => {
        console.log('in load course success ',action.courses)
        return {...state, loading:false, descriptions: [...action.courses],  error: undefined};
    }),
    on (loadCourseFailure, (state, action) => {
        console.log('in load course failure ',action.error)
        return {...state, loading:false, error: action.error};
    }),

    on (deleteCourse, (state, action) => {
        console.log('in delete course description reducer')
        return {...state, loading:true, error:undefined};
    }),
    on (deleteCourseSuccess, (state, action) => {
        console.log('in delete course success ',action.id)
        return {...state, loading:false, 
            descriptions: state.descriptions.filter( c => c.id !== action.id),  
            error: undefined};
    }),
    on (deleteCourseFailure, (state, action) => {
        console.log('in delete course failure ',action.error)
        return {...state, loading:false, error: action.error};
    }),

    on (addCourse, (state, action) => {
        console.log('in add course description reducer')
        return {...state, loading:true, error:undefined};
    }),
    on (addCourseSuccess, (state, action) => {
        console.log('in add course success ',action.course.code)
        return {...state, loading:false, 
            descriptions: [...state.descriptions, action.course],  
            error: undefined};
    }),
    on (addCourseFailure, (state, action) => {
        console.log('in add course failure ',action.error)
        return {...state, loading:false, error: action.error};
    })
);


export function ClassDescriptionReducer(state: ClassDescriptionState | undefined, action: Action){
    return myClassDescriptionsReducer(state, action);
}