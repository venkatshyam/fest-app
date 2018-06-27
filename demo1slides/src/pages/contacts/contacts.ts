import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FeedbackProvider } from '../../providers/feedback/feedback';

/**
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})

export class ContactPage {
  items: string;
  data : any;
  @ViewChild('feeds') feed;
  constructor(public navCtrl: NavController, public feedget:FeedbackProvider ,public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'myMenu');
    this.items = 'faqs';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }
  feedback()
  {
    var body = {

      feedback:this.feed.value,
    }
    this.feedget.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
     this.data=res;
    },
      err => {
        console.log(err);
      });
  }

}