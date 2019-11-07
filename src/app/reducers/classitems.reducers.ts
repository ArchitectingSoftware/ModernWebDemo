import { createReducer, on, Action } from '@ngrx/store'
import { removeClassItem,
        createClassItem,
        createClassItemSuccess} from './classitems.actions'
import { ClassItem } from './classitems.model';


export interface ClassItemsState{
    items: ClassItem[]
}

const initialState: ClassItemsState = {
    items: [] // If you want to preload you can....[{id: 1, name: "foo", score:100}]
}

const myClassItemsReducer = createReducer(initialState,
    on (createClassItem, (state, action) => {
        console.log ('adding ', action.item, ' count-> ', state.items.length )
        const newItem = action.item
        return {...state, items: [...state.items,newItem]};
    }),
    on (removeClassItem, (state, action) => {
        console.log ('removing ', action.id )
        return {...state, items: state.items.filter( i => i.id !== action.id)};
    })
);


export function ClassItemsReducer(state: ClassItemsState | undefined, action: Action){
    return myClassItemsReducer(state, action);
}