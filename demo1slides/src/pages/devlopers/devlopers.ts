import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DevlopersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devlopers',
  templateUrl: 'devlopers.html',
})
export class DevlopersPage {
  items: string
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
    this.items = 'contest';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevlopersPage');
  }

}