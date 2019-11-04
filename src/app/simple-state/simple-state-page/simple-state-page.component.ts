import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-state-page',
  templateUrl: './simple-state-page.component.html',
  styleUrls: ['./simple-state-page.component.css']
})
export class SimpleStatePageComponent implements OnInit {

  formMessage: string = "Sending Hello to Child from Parent";
  eventIdFromChild: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting!");
  }

  getUpdateFromChild(eventId: number){
    console.log('GOT EVENT', eventId)
    this.eventIdFromChild = eventId;
  }

}
