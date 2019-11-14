import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../simple-service.service';

@Component({
  selector: 'app-second-service-consumer',
  templateUrl: './second-service-consumer.component.html',
  styleUrls: ['./second-service-consumer.component.css']
})
export class SecondServiceConsumerComponent implements OnInit {

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
