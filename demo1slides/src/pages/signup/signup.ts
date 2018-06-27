import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastOptions, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { LoginpushProvider } from '../../providers/loginpush/loginpush';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 data:any;
 nameerror:any;
  emailerror:any;
  pswerror:any;
  clgerror:any;
  yearerror:any;
  brancherror:any;
  phoneerror:any;
  toastOptions:ToastOptions;
  toastOptions1:ToastOptions;
 @ViewChild('name') name;
 @ViewChild('email') email;
 @ViewChild('password') password;
 @ViewChild('branch') branch;
 @ViewChild('year') year;
 @ViewChild('phone') phone;
 @ViewChild('college') college;

  constructor(public toast:ToastController,public navCtrl: NavController, public menu:MenuController,public navParams: NavParams, public logprovider: LoginpushProvider) {
    this.toastOptions={
      message: 'Please Enter some data',
      duration:3000,
      position:'top'
    }
    this.toastOptions1={
      message: 'Registered succesfully',
      duration:3000,
      position:'top'
    }
  }
  ionViewWillEnter() {

    this.menu.swipeEnable( false )
}

ionViewDidLeave() {

    this.menu.swipeEnable( true )
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
sig()
{
  this.navCtrl.push(LoginPage);
}

  postData() {

     if(this.name.value==""||this.name.value==""||this.name.value==""||this.name.value==""||this.name.value==""||this.name.value==""||this.name.value=="")
     {    
      this.toast.create(this.toastOptions).present()  
     } 
   
  else{

    console.log('post works');
    console.log(this.college.value);
    var body = {
      name:this.name.value,
    email:this.email.value,
    password:this.password.value,
   college:this.college.value,
   year:this.year.value,
   branch:this.branch.value,
   phone:this.phone.value
    }
  //console.log(body);
    this.logprovider.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
     this.data=res;
     this.toast.create(this.toastOptions1).present()  
     this.navCtrl.push(LoginPage);
    },
      err => {
        console.log(err);
      });
    }
      
  }
}

