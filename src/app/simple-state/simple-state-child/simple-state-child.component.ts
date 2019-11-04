import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-simple-state-child',
  templateUrl: './simple-state-child.component.html',
  styleUrls: ['./simple-state-child.component.css']
})
export class SimpleStateChildComponent implements OnInit {

  stateFullCounter = 0;
  @Input() inProperty: string
  @Output() updateEvent : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Sending event',this.stateFullCounter)
    this.stateFullCounter++;
    this.updateEvent.emit(this.stateFullCounter);
  }

}
