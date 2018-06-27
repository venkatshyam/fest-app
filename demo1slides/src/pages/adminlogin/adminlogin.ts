import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AdmingetProvider } from '../../providers/adminget/adminget';

/**
 * Generated class for the AdminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class AdminloginPage {
 data;
 truth;
 @ViewChild('email') email;
 

  constructor(public menu:MenuController,public navCtrl: NavController, public navParams: NavParams, public adminget:AdmingetProvider) {
  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
  }

   submit()
   {
    console.log('post works');
    console.log(this.email.value);
    var body = {
    email:this.email.value
    }
       
      this.adminget.addComment(body).subscribe(res => {
        console.log(JSON.stringify(res));
        this.truth = true;
       this.data=res[0];
       
      },
        err => {
          console.log(err);
        });
  

   }

}
