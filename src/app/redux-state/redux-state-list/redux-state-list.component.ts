import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ClassItemsState } from 'src/app/reducers/classitems.reducers';
import { ClassItem } from 'src/app/reducers/classitems.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { map } from 'rxjs/operators';
import { removeClassItem } from 'src/app/reducers/classitems.actions';

@Component({
  selector: 'app-redux-state-list',
  templateUrl: './redux-state-list.component.html',
  styleUrls: ['./redux-state-list.component.css']
})
export class ReduxStateListComponent implements OnInit {

  message: string = "";
  tmpMessage: string;

  classItems$: Observable<ClassItemsState>;
  ClassItemsSubscription: Subscription;
  ClassItems: ClassItem[] = [];

  constructor(private store: Store<State>) { 
    this.classItems$ = store.pipe(select('classItems'))
  }

  ngOnInit() {
    this.ClassItemsSubscription = this.classItems$
    .pipe(
      map( ci => {
        console.log('got items update ', ci);
        this.ClassItems = ci.items
      })
    ).subscribe();
  }

  onDelete(id: number){
    console.log("Delete Pressed ", id)
    this.store.dispatch(removeClassItem({id: id}))
  }

}
