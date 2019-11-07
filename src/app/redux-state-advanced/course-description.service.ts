import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ClassDescription } from '../reducers/class-description.model';
import { delay, tap } from 'rxjs/operators';
import { ClassDescriptionState } from '../reducers/class-description.reducers';

@Injectable({
  providedIn: 'root'
})
export class CourseDescriptionService {

  private URL = "http://localhost:3000/courses";

  constructor(private httpClient: HttpClient) { }

  getCourses(){
    console.log('in get courses')
    return this.httpClient.get<ClassDescription[]>(this.URL)
      .pipe(
        delay(500)
      );
  }
  addCourses(newCourse:ClassDescriptionState){
    console.log('in get courses')
    return this.httpClient.post(this.URL, newCourse)
      .pipe(
        delay(500)
      );
  }
  deleteCourse(id: number){
    return this.httpClient.delete(`${this.URL}/${id}`)
      .pipe(
        delay(500)
      );
  }
}
