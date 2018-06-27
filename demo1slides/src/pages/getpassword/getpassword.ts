import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { GetpwdProvider } from '../../providers/getpwd/getpwd';
import { LoginPage } from '../login/login';

/**
 * Generated class for the GetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getpassword',
  templateUrl: 'getpassword.html',
})
export class GetpasswordPage {
@ViewChild('mail') email;
data;
toastOptions:ToastOptions;
  constructor(public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,public getpwd:GetpwdProvider) {
    this.toastOptions={
      message: 'Recovery mail is sent!',
      duration:3000,
      position:'top'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetpasswordPage');
  }

  getpassword()
  {

    console.log('post works');
    console.log(this.email.value);
    var body = {

    email:this.email.value
   
    }

  //console.log(body);
    this.getpwd.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
     this.data=res;
     this.toast.create(this.toastOptions).present()
     this.navCtrl.push(LoginPage);
    },
      err => {
        console.log(err);
      });

  }

}
