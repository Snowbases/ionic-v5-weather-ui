import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDateToWeekday'
})
export class FormatDateToWeekdayPipe implements PipeTransform {

  transform(date) {
    if (date == 'Today') {
      return date;
    } else {
      return moment(date).format('ddd');
    }
  }

}
