/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-input-rename */
import { Component, Input, OnInit } from '@angular/core';
 interface stopwatch{
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number
 }
@Component({
  selector: 'one-digit-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  @Input('color') color?: number[];
  @Input('bckColor') bckColor?: number[];
  @Input('width') width?: number;
  @Input('time') time?: string;
  @Input('dateClk') dateClk?: string;
  @Input('countDown') countDown?: boolean;
  sepWidth?: number;
  timeC: string | undefined;
  interval: any;
  constructor() {
    if(this.countDown == false)
      this.timeC = "";
    if(this.time == undefined)
      this.timeC = "";
    if(this.color == undefined)
      this.color = [0,250,0];
    if(this.width == undefined){
      this.width = 100;
      this.sepWidth = this.width/2;
    }
    if(this.bckColor == undefined)
      this.bckColor = [0,0,0];
  }

  ngOnInit(): void {
    if(this.width != null)
      this.sepWidth = this.width/2;
    if(this.time == undefined)
      this.timeC = ""
    if(this.countDown != undefined && this.countDown && this.time != undefined){
      const l = this.time.split(":");
      let sw = {} as stopwatch;
      sw.hours = 0;
      sw.minutes = 0;
      sw.seconds = 0;
      sw.miliseconds = 0;
      switch(l.length){
        case 1:{
          if(parseInt(l[0],10)>60)
            sw.minutes = 1;
          if(parseInt(l[0],10)<0){
            sw.hours = 0;
            sw.minutes = 0;
            sw.seconds = 0;
            sw.miliseconds = 0;
          }
          if(parseInt(l[0],10)<60 && parseInt(l[0],10)>=0)
            sw.seconds = parseInt(l[0],10);
        } break;
        case 2:{
          if(parseInt(l[0],10)>60)
            sw.hours = 1;
          if(parseInt(l[0],10)<0 || parseInt(l[1],10)<0){
            sw.hours = 0;
            sw.minutes = 0;
            sw.seconds = 0;
            sw.miliseconds = 0;
          }
          if(parseInt(l[0],10)<60 && parseInt(l[0],10)>=0 &&
             parseInt(l[1],10)<60 && parseInt(l[1],10)>=0){
               sw.minutes = parseInt(l[0],10);
               sw.seconds = parseInt(l[1],10);
             }
        }break;
        case 3:{
          if(parseInt(l[0],10)>24){
            sw.hours = 23;
            sw.minutes = 59;
            sw.seconds = 59;
            sw.miliseconds = 999;
          }
          if(parseInt(l[0],10)<0 || parseInt(l[1],10)<0 || parseInt(l[2],10)<0){
            sw.hours = 0;
            sw.minutes = 0;
            sw.seconds = 0;
            sw.miliseconds = 0;
          }
          if(parseInt(l[0],10)<24 && parseInt(l[0],10)>=0 &&
             parseInt(l[1],10)<60 && parseInt(l[1],10)>=0 &&
             parseInt(l[2],10)<60 && parseInt(l[2],10)>=0){
               sw.hours = parseInt(l[0],10);
               sw.minutes = parseInt(l[1],10);
               sw.seconds = parseInt(l[2],10);
             }
        }break;
        case 4:{
          if(parseInt(l[0],10)>24){
            sw.hours = 23;
            sw.minutes = 59;
            sw.seconds = 59;
            sw.miliseconds = 999;
          }
          if(parseInt(l[0],10)<0 || parseInt(l[1],10)<0 || parseInt(l[2],10)<0){
            sw.hours = 0;
            sw.minutes = 0;
            sw.seconds = 0;
            sw.miliseconds = 0;
          }
          if(parseInt(l[0],10)<24 && parseInt(l[0],10)>=0 &&
             parseInt(l[1],10)<60 && parseInt(l[1],10)>=0 &&
             parseInt(l[2],10)<60 && parseInt(l[2],10)>=0){
               sw.hours = parseInt(l[0],10);
               sw.minutes = parseInt(l[1],10);
               sw.seconds = parseInt(l[2],10);
               sw.miliseconds = parseInt(l[3],10);
             }
        }break;
      }
      this.interval = setInterval(() => {
        if(sw.seconds == 0 && sw.minutes == 0 && sw.hours == 0){
          sw.minutes = 0;
          sw.seconds = 0;
          sw.hours = 0;
          sw.miliseconds = 0;
          clearInterval(this.interval);
        }
        else{
          sw.seconds--;
          if(sw.seconds<0){
            sw.minutes--;
            if(sw.minutes<0){
              sw.hours--;
              if(sw.hours<0){
                sw.minutes = 0;
                sw.seconds = 0;
                sw.hours = 0;
                sw.miliseconds = 0;
                clearInterval(this.interval);
              }
              else{
                sw.minutes = 59;
                sw.seconds = 59;
              }
            }
            else{
              sw.seconds = 59;
            }
          }
        }
        if(sw.seconds == 0 && sw.minutes == 0 && sw.hours == 0)
          clearInterval(this.interval);
        this.timeC = sw.hours.toString().padStart(2,"0")+":"+sw.minutes.toString().padStart(2,"0")+":"+sw.seconds.toString().padStart(2,"0")+":"+sw.miliseconds.toString().padStart(3,"0");
      }, 1000);
    }
    else if(this.countDown == false){
      this.interval = setInterval(() => {
        const d = new Date();
        this.timeC = d.getHours().toString().padStart(2,'0') + ":" +d.getMinutes().toString().padStart(2,'0') + ":" +d.getSeconds().toString().padStart(2,'0')+":000";
      }, 1000);
    }
  }
}
