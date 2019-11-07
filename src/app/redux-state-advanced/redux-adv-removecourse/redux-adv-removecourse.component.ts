import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseDescriptionService } from '../course-description.service';
import { ClassDescriptionState } from 'src/app/reducers/class-description.reducers';
import { ClassDescription } from 'src/app/reducers/class-description.model';
import { deleteCourse } from 'src/app/reducers/class-description.actions';

@Component({
  selector: 'app-redux-adv-removecourse',
  templateUrl: './redux-adv-removecourse.component.html',
  styleUrls: ['./redux-adv-removecourse.component.css']
})
export class ReduxAdvRemovecourseComponent implements OnInit {

  classDescriptions$: Observable<ClassDescriptionState>;
  ClassDescriptionSubscription: Subscription;
  ClassDescriptions: ClassDescription[] = [];

  constructor(private store: Store<State>) { 
    this.classDescriptions$ = store.pipe(select('classDescriptions'));
  }

  ngOnInit() {
    this.ClassDescriptionSubscription = this.classDescriptions$
      .pipe(
        map( ci => {
          console.log('got items update ', ci);
          this.ClassDescriptions = ci.descriptions
        })
      ).subscribe();
  }

  onDelete(id: number){
    console.log("Delete Pressed ", id)
    this.store.dispatch(deleteCourse({id: id}))
  }

}
