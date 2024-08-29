import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [ErrorComponent],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
