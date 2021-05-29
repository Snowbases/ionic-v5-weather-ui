import { Component, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { ModalController, AnimationController } from '@ionic/angular';
import { FactoryComponent } from '../../components/factory/factory.component';
import { SettingsComponent } from '../../components/settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
    public modalController: ModalController,
    public animationController: AnimationController,
  ) { }

  async ionViewWillEnter() {
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

  async showFactoryModal() {
    const modal = await this.modalController.create({
      component: FactoryComponent,
      cssClass: "factory-modal",
      backdropDismiss: true,
      mode: "ios"
    });

    modal.onDidDismiss().then(data => {
      if (data["data"] != null) {
        console.log(data);
      }
    });
    await modal.present();
  }

  async showSettingsModal() {
    const modal = await this.modalController.create({
      component: SettingsComponent,
      cssClass: "settings-modal",
      backdropDismiss: false,
      mode: "ios"
    });

    modal.onDidDismiss().then(data => {
      if (data["data"] != null) {
        console.log(data);
      }
    });
    await modal.present();
  }
}
