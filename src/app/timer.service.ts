import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  time:Date=new Date();
  timeEmitter:EventEmitter<Date> = new EventEmitter<Date>();
  constructor() { 
    setInterval(()=>{
      this.time = new Date();
      this.timeEmitter.emit(this.time);
    },1);




  }

}
