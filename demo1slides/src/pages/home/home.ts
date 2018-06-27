import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccordionComponent } from '../../components/accordion/accordion';
import { NontechComponent } from '../../components/nontech/nontech';
import { PptComponent } from '../../components/ppt/ppt';
import { TechnicalComponent } from '../../components/technical/technical';
import { SpotlightsComponent } from '../../components/spotlights/spotlights';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
              
  }
  wrkshp(){
    this.navCtrl.push(AccordionComponent);
  }
  nontech()
  {
    this.navCtrl.push(NontechComponent);
  }
  tech()
  {
    this.navCtrl.push(TechnicalComponent);
  }
    ppt()
    {
      this.navCtrl.push(PptComponent);
    }
  spot()
  {
   this.navCtrl.push(SpotlightsComponent);
  }

}
