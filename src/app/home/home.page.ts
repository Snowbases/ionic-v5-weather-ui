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
  @ViewChild('weatherWeek', { read: ElementRef, static: false }) weatherWeekElementRef: ElementRef;
  @ViewChild('todayWeather', { read: ElementRef, static: false }) todayWeatherElementRef: ElementRef;

  public weatherWeekLists = [];
  public todayWeatherDetails = [];

  weatherWeekSlideOptions = {
    initialSlide: 0,
    slidesPerView: 5,
    paginationClickable: true,
    // resistance: true,
    // resistanceRatio: 0,
    autoplay: false
  };

  todayWeatherSlideOptions = {
    initialSlide: 0,
    slidesPerView: 4,
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
      icon: 'assets/icon/cloud-sunny.svg',
      weather_state: 'Sunny',
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
      weather_state: 'Cloudy',
      date: '2020-06-12'
    }];

    const todayWeatherDetails = [{
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '06:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '07:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '08:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '09:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '10:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '11:30 PM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '12:30 AM'
    }, {
      icon: 'assets/icon/cloud-plain.svg',
      weather_state: 'Clouds',
      time: '1:30 AM'
    }];

    const todayDate = moment().format("YYYY-MM-DD");
    weatherWeekLists
      .filter(o => o.date == todayDate)
      .map(o => o.date = 'Today');

    // TO-DO: Splice objects based on current time
    // const timeNow = "06:30 PM";
    // weatherTodayDetails
    //   .filter(o => o.time == timeNow)

    this.weatherWeekLists.push(...weatherWeekLists);
    this.todayWeatherDetails.push(...todayWeatherDetails);
  }

}
