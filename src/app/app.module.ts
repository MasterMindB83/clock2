import { DigitModule } from './digitv2/digit.module';
import { TimerService } from './timer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { DigitalClockComponent } from './digital-clock.component';
import { DigitalClockModule } from './digital-clock/digital-clock.module';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    DigitComponent
  ],
  imports: [
    BrowserModule,
    DigitModule,
    DigitalClockModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
