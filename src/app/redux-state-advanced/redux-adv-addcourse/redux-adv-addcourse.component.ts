import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseDescriptionService } from '../course-description.service';
import { ClassDescriptionState } from 'src/app/reducers/class-description.reducers';
import { ClassDescription } from 'src/app/reducers/class-description.model';
import { addCourse } from 'src/app/reducers/class-description.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-redux-adv-addcourse',
  templateUrl: './redux-adv-addcourse.component.html',
  styleUrls: ['./redux-adv-addcourse.component.css']
})
export class ReduxAdvAddcourseComponent implements OnInit {

  classDescriptions$: Observable<ClassDescriptionState>;
  ClassDescriptionSubscription: Subscription;
  ClassDescriptions: ClassDescription[] = [];

  tmpCourse: ClassDescription = new ClassDescription();
  tmpString: string = "";

  constructor(private store: Store<State>, private courseDescriptionService: CourseDescriptionService) { 
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

  onSubmit(){
    //let newItem: ClassItem = {id: this.counter++, name: this.tmpMessage};
    this.store.dispatch(addCourse({course: this.tmpCourse}));
    this.tmpCourse = new ClassDescription();
    //form.reset();
    //this.tmpMessage = ""
  }

  resetMyForm(myForm: NgForm){
    myForm.reset()
    myForm.resetForm();

    console.log('form valid ',myForm.valid)
  }

}
