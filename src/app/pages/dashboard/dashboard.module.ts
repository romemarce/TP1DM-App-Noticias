import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { CardModule } from "../../components/card/card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    LayoutModule,
    CardModule
],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
