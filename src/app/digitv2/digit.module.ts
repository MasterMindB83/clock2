import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from './separator/separator.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { DigitComponent } from './digit/digit.component';



@NgModule({
  declarations: [
    SeparatorComponent,
    DigitComponent,
    DigitalClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DigitalClockComponent
  ]
})
export class DigitModule { }
