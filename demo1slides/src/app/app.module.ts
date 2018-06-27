import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IntroPage} from '../pages/intro/intro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SignupPage } from '../pages/signup/signup';
import { AccordionComponent } from '../components/accordion/accordion';
import { ContactPage } from '../pages/contacts/contacts';
import { NontechComponent } from '../components/nontech/nontech';
import { PptComponent } from '../components/ppt/ppt';
import { TechnicalComponent } from '../components/technical/technical';
import { MapsPage } from '../pages/maps/maps';
import { LoginpushProvider } from '../providers/loginpush/loginpush';
import { SpotlightsComponent } from '../components/spotlights/spotlights';
import { FaqsPage } from '../pages/faqs/faqs';
import { ContestPage } from '../pages/contest/contest';
import { LogoutPage } from '../pages/logout/logout';
import { HttpModule } from '@angular/http';
import { LogingetProvider } from '../providers/loginget/loginget';
import { AdminloginPage } from '../pages/adminlogin/adminlogin';
import { AdmingetProvider } from '../providers/adminget/adminget';
import { PusheventProvider } from '../providers/pushevent/pushevent';
import { EventregPage } from '../pages/eventreg/eventreg';
import { TransferProvider } from '../providers/transfer/transfer';
import { AdminformPage } from '../pages/adminform/adminform';
import { AdminputProvider } from '../providers/adminput/adminput';
import { DevlopersPage } from '../pages/devlopers/devlopers';
import { GetpasswordPage } from '../pages/getpassword/getpassword';
import { GetpwdProvider } from '../providers/getpwd/getpwd';
import { FeedbackProvider } from '../providers/feedback/feedback';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    IntroPage,
    SignupPage,
    HomePage,
    ListPage,
    AccordionComponent,
    ContactPage,
    DevlopersPage,
    NontechComponent,
    PptComponent,
    TechnicalComponent,
    MapsPage,
    SpotlightsComponent,
    FaqsPage,
    ContestPage,
    AdminloginPage,
    LogoutPage,
    EventregPage,
    AdminformPage,
    GetpasswordPage
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    SignupPage,
    HomePage,
    DevlopersPage,
    ListPage,
    AccordionComponent,
    ContactPage,
    NontechComponent,
    PptComponent,
    TechnicalComponent,
    MapsPage,
    SpotlightsComponent,
    FaqsPage,
    ContestPage,
    LogoutPage,
    AdminloginPage,
    EventregPage,
    AdminformPage,
    GetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    LoginpushProvider,
    LogingetProvider,
    AdmingetProvider,
    PusheventProvider,
    PusheventProvider,
    TransferProvider,
    AdminputProvider,
    GetpwdProvider,
    FeedbackProvider

  ]
})
export class AppModule {
}
