import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IntroPage} from '../pages/intro/intro';
import { ContactPage } from '../pages/contacts/contacts';
import { NontechComponent } from '../components/nontech/nontech';
import { PptComponent } from '../components/ppt/ppt';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContestPage } from '../pages/contest/contest';
import { LogoutPage } from '../pages/logout/logout';
import { AdminloginPage } from '../pages/adminlogin/adminlogin';
import { DevlopersPage } from '../pages/devlopers/devlopers';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  
  rootPage: any = IntroPage;
 

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }



  
  contact() {
    this.nav.setRoot(ContactPage);
  }
  faq() {
    this.nav.setRoot(FaqsPage);
  }
  logout()
  {
    this.nav.setRoot(LogoutPage);
  }
 contest(){
   this.nav.setRoot(ContestPage);
 }
 home(){
   this.nav.setRoot(HomePage);
 }
 devlopers(){
   this.nav.setRoot(DevlopersPage);
 }
 
}
