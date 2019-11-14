import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-first-service-consumer',
  templateUrl: './first-service-consumer.component.html',
  styleUrls: ['./first-service-consumer.component.css']
})
export class FirstServiceConsumerComponent implements OnInit {

  constructor(private  simpleService: SimpleServiceService) { }

  dataCacheValue: string = ""
  tmpCacheValue:  string = ""

  ngOnInit() {
  }

  GetDataFromService(){
      this.dataCacheValue = this.simpleService.getCacheValue()
  }

  SendDataToService(){
    this.simpleService.setCacheValue(this.tmpCacheValue)
  }

}
