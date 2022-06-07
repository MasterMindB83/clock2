/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'one-digit-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {
  @Input('color') color?: number[];
  @Input('bckColor') bckColor?: number[];
  @Input('idp') idp?: number;
  @Input('width') width?: number;
  backColor: string;
  activeColor: string;
  wrapp: any;
  wrappId: string = "";
  constructor() {
    this.activeColor = "#00ff00";
    this.backColor = "#000000"
  }

  ngOnInit(): void {
    if(this.idp != undefined)
      this.wrappId = this.idp.toString();
    if(this.color != undefined && this.bckColor != undefined){
      this.activeColor = "rgba(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ",1)";
      this.backColor = "rgba(" + this.bckColor[0] + "," + this.bckColor[1] + "," + this.bckColor[2] + ",1)";
    }
    setTimeout(() => {
      if(this.wrappId != null ){
        this.wrapp = <HTMLDivElement>document.getElementById(this.wrappId);
        if(this.width != undefined){
          (<HTMLDivElement>this.wrapp).style.width = this.width+"px";
          (<HTMLDivElement>this.wrapp).style.height = this.width*3.6+"px";
        }

      }
    }, 50);
  }

}
