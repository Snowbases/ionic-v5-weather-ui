import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { ImageShellComponent } from './image-shell/image-shell.component';
import { FactoryComponent } from './factory/factory.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  declarations: [
    AspectRatioComponent,
    ImageShellComponent,
    FactoryComponent,
    SettingsComponent
  ],
  exports: [
    AspectRatioComponent,
    ImageShellComponent,
    FactoryComponent,
    SettingsComponent
  ],
  entryComponents: [],
})
export class ComponentsModule { }
