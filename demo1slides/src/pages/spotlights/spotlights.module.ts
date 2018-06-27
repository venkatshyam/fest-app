import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpotlightsPage } from './spotlights';

@NgModule({
  declarations: [
    SpotlightsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpotlightsPage),
  ],
})
export class SpotlightsPageModule {}
