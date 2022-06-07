import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitComponent } from './digit/digit.component';
import { MainClockComponent } from './main-clock.component';



@NgModule({
  declarations: [
    DigitComponent,
    MainClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainClockComponent]
})
export class DigitalClockModule { }
