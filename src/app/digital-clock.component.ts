import { TimerService } from './timer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  @Input("oncolor") oncolor:string="green";
  @Input("offcolor") offcolor:string="white";
  @Input("backcolor") backcolor:string="white";
  @Input("height") height:number=50;
  @Input("top") top:number=0;
  @Input("left") left:number=0;
  left1:number = 100;
  left2:number = 100;
  left3:number = 100;
  left4:number = 100;
  left5:number = 100;
  hour_0:number=0;
  hour_1:number=0;
  minute_0:number=0;
  minute_1:number=0;
  second_0:number=0;
  second_1:number=0;
  clock!:HTMLDivElement; 
  constructor(private timer:TimerService) { }

  ngOnInit(): void {
    this.clock = document.getElementsByClassName("clock")[0] as HTMLDivElement;
    this.clock.style.width = this.height*11.5 +"px";
    this.clock.style.height = this.height *2.7 +"px";
    this.clock.style.left = this.left + "px";
    this.clock.style.top = this.top + "px";
    this.left1 = this.height*2;
    this.left2 = this.height*4.2;
    this.left3 = this.height*6;
    this.left4 = this.height*8;
    this.left5 = this.height*10;
    this.timer.timeEmitter.subscribe(time=>{
      let hours = time.getHours().toString();
      if(hours.length>1)
      {
          this.hour_0 = +hours.substring(0,1);
          this.hour_1 = +hours.substring(1,2);
      }
      else{
        this.hour_0 = 0;
        this.hour_1 = +hours;

      }
      let minutes = time.getMinutes().toString();
      if(minutes.length>1)
      {
          this.minute_0 = +minutes.substring(0,1);
          this.minute_1 = +minutes.substring(1,2);
      }
      else{
        this.minute_0 = 0;
        this.minute_1 = +minutes;

      }
      
      let secondes = time.getSeconds().toString();
      if(secondes.length>1)
      {
          this.second_0 = +secondes.substring(0,1);
          this.second_1 = +secondes.substring(1,2);
      }
      else{
        this.second_0 = 0;
        this.second_1 = +secondes;

      }
    });
  }

}
