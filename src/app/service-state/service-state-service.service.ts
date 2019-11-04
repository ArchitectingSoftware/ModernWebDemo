import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceStateServiceService {

  private messageText: string = "";
  private messageSource = new BehaviorSubject<string>('')
  messageStream = this.messageSource.asObservable();

  publishMessage(message: string){
    this.messageText = message;
    this.messageSource.next(message)
  }

  constructor() { }
}
