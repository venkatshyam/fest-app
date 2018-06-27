import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      image: "assets/imgs/fest7.jpeg",
    },
    {
      image: "assets/imgs/cover2.jpg",
    },
    {
      image: "assets/imgs/cover.jpg",
    }
  ];




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  skip()
  {
    this.navCtrl.push(LoginPage);
  }
  continue()
  {
    this.navCtrl.push(LoginPage);
  }
}
