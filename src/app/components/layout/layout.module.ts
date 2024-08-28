import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, MenuComponent],
})
export class LayoutModule {}
