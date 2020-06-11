import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormatDateToWeekdayPipe } from './format-date-to-weekday/format-date-to-weekday.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    FormatDateToWeekdayPipe
  ],
  exports: [
    FormatDateToWeekdayPipe
  ],
  entryComponents: [],
})
export class PipesModule { }
