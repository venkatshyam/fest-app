import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AdminputProvider } from '../../providers/adminput/adminput';
import { AdminloginPage } from '../adminlogin/adminlogin';

/**
 * Generated class for the AdminformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminform',
  templateUrl: 'adminform.html',
})
export class AdminformPage {
  data;
  @ViewChild('ussername') email;
  @ViewChild('password') password;

  constructor(public menu:MenuController,public admin:AdminputProvider ,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AdminformPage');
  }


  register()
  {
    console.log('post works');
    console.log(this.email.value);
    var body = {
    email:this.email.value,
    password:this.password.value,
    role:"admin"
    }

  //console.log(body);
    this.admin.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
     this.data=res;
     this.navCtrl.push(AdminloginPage);
    },
      err => {
        console.log(err);
      });

    }

  }
