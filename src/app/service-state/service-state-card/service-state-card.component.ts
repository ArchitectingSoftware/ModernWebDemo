import { Component, OnInit, Input } from '@angular/core';
import { ServiceStateServiceService } from '../service-state-service.service';

@Component({
  selector: 'app-service-state-card',
  templateUrl: './service-state-card.component.html',
  styleUrls: ['./service-state-card.component.css']
})
export class ServiceStateCardComponent implements OnInit {

  @Input() cardName: string = "Service State Card"

  message: string = "";
  tmpMessage: string;

  constructor(private messageService: ServiceStateServiceService) { }

  ngOnInit() {
    this.messageService.messageStream.subscribe( msg => this.message = this.tmpMessage = msg)
  }


  onSubmit(){
    this.messageService.publishMessage(this.tmpMessage)
  }

}
