import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminformPage } from './adminform';

@NgModule({
  declarations: [
    AdminformPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminformPage),
  ],
})
export class AdminformPageModule {}
