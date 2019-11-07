import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { ClassDescriptionState } from 'src/app/reducers/class-description.reducers';
import { Observable } from 'rxjs';
import { loadCourseDescriptions } from '../../reducers/class-description.actions'
import { CourseDescriptionService } from '../course-description.service';
import { ClassDescription } from 'src/app/reducers/class-description.model';

@Component({
  selector: 'app-redux-adv-page',
  templateUrl: './redux-adv-page.component.html',
  styleUrls: ['./redux-adv-page.component.css']
})
export class ReduxAdvPageComponent implements OnInit {

  classDescriptions$: Observable<ClassDescriptionState>;

  constructor(private store: Store<State>, private courseDescriptionService: CourseDescriptionService) {
    this.classDescriptions$ = store.pipe(select('classDescriptions'))
  }

  ngOnInit() {
    //this.courseDescriptionService.getCourses().subscribe((data: ClassDescription[])=>{
    //  console.log('DEBUG SERVICE   ',data);
    //}) 
    this.store.dispatch(loadCourseDescriptions());
  }

}
