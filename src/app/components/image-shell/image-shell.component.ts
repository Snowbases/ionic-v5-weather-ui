import { Component, Input, HostBinding, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image-shell',
  templateUrl: './image-shell.component.html',
  styleUrls: [
    './image-shell.component.scss'
  ]
})
export class ImageShellComponent {
  _src = '';
  _alt = '';
  _size = '';
  _spinnerName = '';

  @HostBinding('class.img-loaded') imageLoaded = false;

  @HostBinding('style.backgroundImage') backgroundImage: string;

  @HostBinding('style.backgroundSize')
  @Input()
  set size(val: string) {
    this._size = (val !== undefined && val !== null) ? val : '';
  }
  get size(): string {
    return this._size;
  }

  @Input()
  set spinner(val: string) {
    this._spinnerName = (val !== undefined && val !== null) ? val : 'crescent'; // set default to crescent
  }
  get spinner(): string {
    return this._spinnerName;
  }

  @Input()
  set src(val: string) {
    if (true) {
      this._src = (val !== undefined && val !== null) ? val : '';
    }

    if (this._size === 'cover') {
      // Unset the background-image
      this.backgroundImage = 'unset';
    }

    // Show loading indicator
    // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
    if (isPlatformServer(this.platformId)) {
      this.imageLoaded = true;
    } else {
      this.imageLoaded = false;
    }
  }

  @Input()
  set alt(val: string) {
    this._alt = (val !== undefined && val !== null) ? val : '';
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  _imageLoaded() {
    // If it's a cover image then set the background-image property accordingly
    if (this._size === 'cover') {
      // this.backgroundImage = 'url(' + this._src + ')';
      setTimeout(() => {
        this.imageLoaded = true;
      }, 1000);
    }
  }
}
