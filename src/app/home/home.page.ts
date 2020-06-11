import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('country', { read: ElementRef, static: false }) countryElementRef: ElementRef;
  @ViewChild('temperature', { read: ElementRef, static: false }) temperatureElementRef: ElementRef;
  @ViewChild('weather', { read: ElementRef, static: false }) weatherElementRef: ElementRef;

  public weatherWeekLists = [];
  public todayWeatherDetails = [];

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 5,
    paginationClickable: true,
    // resistance: true,
    // resistanceRatio: 0,
    autoplay: false
  };

  constructor(

  ) { }

  async ngAfterViewInit() {
    const weatherWeekLists = [{
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      date: '2020-06-8'
    }, {
      icon: 'assets/icon/cloud-sunrainy.svg',
      weather_state: 'Rain',
      date: '2020-06-9'
    }, {
      icon: 'assets/icon/cloud-sunrainy.svg',
      weather_state: 'Rain',
      date: '2020-06-10'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      date: '2020-06-11'
    }, {
      icon: 'assets/icon/cloudy.svg',
      weather_state: 'Clody',
      date: '2020-06-12'
    }];

    const todayDate = moment().format("YYYY-MM-DD");
    weatherWeekLists
      .filter(o => o.date == todayDate)
      .map(o => o.date = 'Today');

    this.weatherWeekLists.push(...weatherWeekLists);
  }

}
