import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers'

@Component({
  selector: 'app-redux-state-page',
  templateUrl: './redux-state-page.component.html',
  styleUrls: ['./redux-state-page.component.css']
})
export class ReduxStatePageComponent implements OnInit {

  constructor( private store: Store<State>) { }

  ngOnInit() {
    

    //this.store.subscribe( action => console.log('DEBUG....', action.classItems.items[0]));
  }

}
