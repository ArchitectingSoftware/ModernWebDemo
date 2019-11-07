import { Component, OnInit, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { getClassItems, createClassItem } from '../../reducers/classitems.actions';
import { ClassItem } from '../../reducers/classitems.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassItemsState } from 'src/app/reducers/classitems.reducers';

@Component({
  selector: 'app-redux-state-card',
  templateUrl: './redux-state-card.component.html',
  styleUrls: ['./redux-state-card.component.css']
})
export class ReduxStateCardComponent implements OnInit {


  message: string = "";
  tmpMessage: string;
  counter = 100;

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
          //console.log('got items update ', ci);
          this.ClassItems = ci.items
        })
      ).subscribe();
  }

  onSubmit(){
    let newItem: ClassItem = {id: this.counter++, name: this.tmpMessage};
    this.store.dispatch(createClassItem({item: newItem}));
    this.tmpMessage = ""
  }

}
