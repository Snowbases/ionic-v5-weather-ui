import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-aspect-ratio',
  templateUrl: './aspect-ratio.component.html',
  styleUrls: [
    './aspect-ratio.component.scss'
  ]
})
export class AspectRatioComponent {
  _ratio: { w: number, h: number };

  @HostBinding('style.padding') ratioPadding = '0px';

  @Input()
  set ratio(ratio: { w: number, h: number }) {
    this._ratio = (ratio !== undefined && ratio !== null) ? ratio : {w: 1, h: 1};

    const ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
    // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
    this.ratioPadding = '0px 0px ' + ratio_height + ' 0px';
  }

  constructor() { }
}
