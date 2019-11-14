import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  constructor() { }

  private cacheValue = ""

  setCacheValue(newValue: string){
    this.cacheValue = newValue
  }

  getCacheValue(){
    return this.cacheValue
  }
}
