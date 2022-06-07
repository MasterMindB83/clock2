import { TimerService } from './../timer.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {
  @Input('height') height:number=80;
  @Input('oncolor') oncolor:string="red";
  @Input('offcolor') offcolor:string="black";
  @Input('backcolor') backcolor:string="black";
  @Input('top') top:number=0;
  @Input('left') left:number=10;
  @Input("rbr") rbr:number=0;
  @Input("displaynumber") displaynumber :number=0;

  color_1:string="red";
  color_2:string="red";
  color_3:string="red";
  color_4:string="red";
  color_5:string="red";
  color_6:string="red";
  color_7:string="red";
  number_1!:HTMLDivElement;
  number_2!:HTMLDivElement;
  number_3!:HTMLDivElement;
  number_4!:HTMLDivElement;
  number_5!:HTMLDivElement;
  number_6!:HTMLDivElement;
  number_7!:HTMLDivElement;
  digit!:HTMLDivElement;
  constructor(private timer:TimerService) { }

  ngOnInit(): void {
    this.number_1 = document.getElementsByClassName("number_1")[this.rbr] as HTMLDivElement;
    this.number_2 = document.getElementsByClassName("number_2")[this.rbr] as HTMLDivElement;
    this.number_3 = document.getElementsByClassName("number_3")[this.rbr] as HTMLDivElement;
    this.number_4 = document.getElementsByClassName("number_4")[this.rbr] as HTMLDivElement;
    this.number_5 = document.getElementsByClassName("number_5")[this.rbr] as HTMLDivElement;
    this.number_6 = document.getElementsByClassName("number_6")[this.rbr] as HTMLDivElement;
    this.number_7 = document.getElementsByClassName("number_7")[this.rbr] as HTMLDivElement;
    this.digit = document.getElementsByClassName("digit")[this.rbr] as HTMLDivElement;
    this.setNumber();
    this.timer.timeEmitter.subscribe(v=>{
      this.setDisplay();
    });
  }
  setDisplay()
  {
    if(this.displaynumber==0)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.oncolor;
      this.color_7=this.offcolor;
    }
    else if(this.displaynumber==1)
    {
      this.color_1=this.offcolor;
      this.color_2=this.offcolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.offcolor;
      this.color_6=this.offcolor;
      this.color_7=this.offcolor;
    }
    else if(this.displaynumber==2)
    {
      this.color_1=this.offcolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.offcolor;
      this.color_5=this.oncolor;
      this.color_6=this.oncolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==3)
    {
      this.color_1=this.offcolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.offcolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==4)
    {
      this.color_1=this.oncolor;
      this.color_2=this.offcolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.offcolor;
      this.color_6=this.offcolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==5)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.offcolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.offcolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==6)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.offcolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.oncolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==7)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.offcolor;
      this.color_6=this.offcolor;
      this.color_7=this.offcolor;
    }
    else if(this.displaynumber==8)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.oncolor;
      this.color_7=this.oncolor;
    }
    else if(this.displaynumber==9)
    {
      this.color_1=this.oncolor;
      this.color_2=this.oncolor;
      this.color_3=this.oncolor;
      this.color_4=this.oncolor;
      this.color_5=this.oncolor;
      this.color_6=this.offcolor;
      this.color_7=this.oncolor;
    }
  }
  setNumber(){
    this.digit.style.backgroundColor = this.backcolor;
    this.digit.style.top = this.top +"px";
    this.digit.style.left = this.left +"px";
    this.digit.style.width = 1.4*this.height+"px";
    this.digit.style.height = 2.6*this.height+"px";

    this.number_1.style.top = (/*this.top +*/ this.height*0.3) + "px";
    this.number_1.style.left = (/*this.left+*/0)+"px";
    this.number_1.style.backgroundColor = this.oncolor;
    this.number_1.style.width = (this.height/3) + "px";
    this.number_1.style.height = (this.height) + "px";


    this.number_2.style.top = (/*this.top*/-this.height*0.25) + "px";
    this.number_2.style.left = (/*this.left +*/this.height*0.53 )+"px";
    this.number_2.style.backgroundColor = this.oncolor;
    this.number_2.style.width = (this.height/3) + "px";
    this.number_2.style.height = (this.height) + "px";


    this.number_3.style.top = (/*this.top +*/ this.height*0.3) + "px";
    this.number_3.style.left = (/*this.left+*/this.height*1.05)+"px";
    this.number_3.style.backgroundColor = this.oncolor;
    this.number_3.style.width = (this.height/3) + "px";
    this.number_3.style.height = (this.height) + "px";



    
    this.number_4.style.top = (/*this.top +*/ this.height*1.35) + "px";
    this.number_4.style.left = (/*this.left+*/this.height*1.05)+"px";
    this.number_4.style.backgroundColor = this.oncolor;
    this.number_4.style.width = (this.height/3) + "px";
    this.number_4.style.height = (this.height) + "px";

    
    this.number_5.style.top = (/*this.top +*/ this.height*1.9) + "px";
    this.number_5.style.left = (/*this.left+*/this.height*0.53)+"px";
    this.number_5.style.backgroundColor = this.oncolor;
    this.number_5.style.width = (this.height/3) + "px";
    this.number_5.style.height = (this.height) + "px";

    
    this.number_6.style.top = (/*this.top +*/ this.height*1.35) + "px";
    this.number_6.style.left = (/*this.left+*/0)+"px";
    this.number_6.style.backgroundColor = this.oncolor;
    this.number_6.style.width = (this.height/3) + "px";
    this.number_6.style.height = (this.height) + "px";

    this.number_7.style.top = (/*this.top + */this.height*0.82) + "px";
    this.number_7.style.left = (/*this.left+*/this.height*0.53)+"px";
    this.number_7.style.backgroundColor = this.oncolor;
    this.number_7.style.width = (this.height/3) + "px";
    this.number_7.style.height = (this.height) + "px";


  }
  setColor(number:number)
  {
    
  }

}
