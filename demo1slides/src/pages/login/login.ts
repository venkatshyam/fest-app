import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, ToastController, ToastOptions } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LogingetProvider } from '../../providers/loginget/loginget';
import { HomePage } from '../home/home';
import { AdminformPage } from '../adminform/adminform';
import { GetpasswordPage } from '../getpassword/getpassword';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any;
  data1:any;
  length:any;
  datas:any;
  toastOptions:ToastOptions;
  toastOptions1:ToastOptions;
  toastOptions2:ToastOptions;
  toastOptions3:ToastOptions;
  @ViewChild('username') ussername;
  @ViewChild('password') password;
  constructor(public toast:ToastController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loginget:LogingetProvider,public menu:MenuController) {
   
    this.toastOptions={
    message: 'Login Success',
    duration:3000,
    position:'top'
  }
  this.toastOptions1={
    message: 'Login Failed',
    duration:3000,
    position:'top'
  }
  this.toastOptions2={
    message: 'Please enter a valid ussername',
    duration:3000,
    position:'top'
  }
  this.toastOptions3={
    message: 'Please enter a valid password',
    duration:3000,
    position:'top'
  }
    this.menu.enable(false,'empmenu');
   console.log("in");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  

   login()
   {
  
    if(this.ussername.value=="")
    {
      this.toast.create(this.toastOptions2).present()      
    }
    else if(this.password.value=="")
    {
      this.toast.create(this.toastOptions3).present()      
    }
    


     
     else{
       this.datas=this.ussername.value;
     
      console.log('post works');
      console.log(this.ussername.value);
      var body = {

      email:this.ussername.value,
      password:this.password.value,
     
      }

    //console.log(body);
      this.loginget.addComment(body).subscribe(res => {
        console.log(JSON.stringify(res));
       this.data=res;
      
       localStorage.setItem('email',this.ussername.value)
       this.toast.create(this.toastOptions).present()
       this.navCtrl.push(HomePage);
      },
        err => {
          this.toast.create(this.toastOptions1).present()
          console.log(err);
        });
  
      }  
    }
    forgot()
    {
      this.navCtrl.push(GetpasswordPage);
    }

    adminlogin()
    {
      this.navCtrl.push(AdminformPage);
    }

 
  signup()
  {
    
    this.navCtrl.setRoot(SignupPage)
  }
  
}
