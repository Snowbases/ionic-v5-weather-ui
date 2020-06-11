import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { ImageShellComponent } from './image-shell/image-shell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  declarations: [
    AspectRatioComponent,
    ImageShellComponent
  ],
  exports: [
    AspectRatioComponent,
    ImageShellComponent
  ],
  entryComponents: [],
})
export class ComponentsModule { }
