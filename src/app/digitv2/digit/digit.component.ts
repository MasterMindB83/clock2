/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
interface digitalNum{
  [key: string]: string [];
}

@Component({
  selector: 'one-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {
  @Input('width') width?: number;
  @Input('num') num: string;
  @Input('color') color?: number[];
  @Input('bckColor') bckColor?: number[];
  @Input('idp') idp?: number;
  @Input('countDown') countDown?: boolean;
  wrapp: any;
  map: digitalNum;
  wrappId: string = "";
  activeColor: string;
  inactiveColor: string;
  backColor: string;
  numberDigit= ["","","","","","",""];
  constructor() {
    this.map = {
      "d0":["","","","","","",""],
      "d1":["","","","","","",""],
      "d2":["","","","","","",""],
      "d3":["","","","","","",""],
      "d4":["","","","","","",""],
      "d5":["","","","","","",""],
      "d6":["","","","","","",""],
      "d7":["","","","","","",""],
      "d8":["","","","","","",""],
      "d9":["","","","","","",""],
      "inactive":["","","","","","",""],
    };
    this.num = "0";
    this.activeColor = "#00ff00";
    this.inactiveColor = "";
    this.backColor = "#000000"
  }

  ngOnInit(): void {
    if(this.idp != undefined)
      this.wrappId = this.idp.toString();
    if(this.color != undefined && this.bckColor != undefined){
      this.activeColor = "rgba(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ",1)";
      this.inactiveColor = "rgba(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ",0.15)";
      this.backColor = "rgba(" + this.bckColor[0] + "," + this.bckColor[1] + "," + this.bckColor[2] + ",1)";
    }
    else{
      this.activeColor = "#00ff00";
      this.inactiveColor = "";
    }
    setTimeout(() => {
      this.map["d0"] = [
        this.activeColor,
        this.activeColor,
        this.activeColor,
        this.activeColor,
        this.activeColor,
        this.activeColor,
        this.inactiveColor
      ];
      this.map["d1"]=[
          this.inactiveColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.inactiveColor,
          this.inactiveColor,
          this.inactiveColor
      ];
      this.map["d2"]=[
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.activeColor
      ];
      this.map["d3"]=[
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.inactiveColor,
          this.activeColor
      ];
      this.map["d4"]=[
          this.inactiveColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor
      ];
      this.map["d5"]=[
          this.activeColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor
      ];
      this.map["d6"]=[
          this.activeColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor
      ];
      this.map["d7"]=[
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.inactiveColor,
          this.inactiveColor,
          this.inactiveColor
      ];
      this.map["d8"]=[
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor
      ];
      this.map["d9"]=[
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.activeColor,
          this.inactiveColor,
          this.activeColor,
          this.activeColor
      ];
      this.map["inactive"]=[
        this.inactiveColor,
        this.inactiveColor,
        this.inactiveColor,
        this.inactiveColor,
        this.inactiveColor,
        this.inactiveColor,
        this.inactiveColor
      ];
      this.numberDigit = this.map["inactive"];
      if(this.wrappId != null ){
        this.wrapp = <HTMLDivElement>document.getElementById(this.wrappId);
        if(this.width != undefined){
          (<HTMLDivElement>this.wrapp).style.width = this.width+"px";
          (<HTMLDivElement>this.wrapp).style.height = this.width*1.8+"px";
        }
        if(this.num != undefined)
          this.numberDigit = this.map["d"+this.num]
      }
    }, 50);
    setInterval(()=>{
      if(this.num != undefined)
        this.numberDigit = this.map["d"+this.num];
      else
        this.numberDigit = this.map["inactive"];
      },1000)
  }

}
