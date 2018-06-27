import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular' ;
import { HomePage } from '../../pages/home/home';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { PusheventProvider } from '../../providers/pushevent/pushevent';


/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'spotlights',
  templateUrl: 'spotlights.html'
})
export class SpotlightsComponent {
  data;
  email;
  @ViewChild('mobhack') mobiledevs;
  @ViewChild('hack') hack;
  @ViewChild('idea') ideas;
  @ViewChild('talk') talks;
  @ViewChild('jam') jams;
  accordionExapanded = false;
  @ViewChild("Ap") cardContent: any;
  accordionExapanded1 = false;
  @ViewChild("Ha") cardContent1: any;
  accordionExapanded2 = false;
  @ViewChild("Ib") cardContent2: any;
  accordionExapanded3 = false;
  @ViewChild("Tc") cardContent3: any;
  accordionExapanded4 = false;
  @ViewChild("Ja") cardContent4: any;

  constructor(public navCtrl:NavController,public renderer: Renderer,public pushevent:PusheventProvider,public alertctrl: AlertController) {
  }
  ngOnInit() {

    }

  onAp() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "900px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExapanded = !this.accordionExapanded;
  }

  reg1() {
    if (this.hack) {
      console.log("hackthon");
      console.log('post works');
      this.email = localStorage.getItem('email');
      console.log(this.email);
      var body = {
        email: this.email,
        event: "hackthon"

      }
      console.log(body);
      this.pushevent.addComment(body).subscribe(res => {
        console.log(JSON.stringify(res));
        this.data = res;
        const alert = this.alertctrl.create({
          title: 'You have registered for this event',
          subTitle: 'Thank You!',
          buttons: ['OK']
        })
        alert.present();

      },
        err => {
          console.log(err);
        });
    }
  }

  jamss() {
    if (this.jams) {
      console.log("justaminute");
      console.log('post works');
      this.email = localStorage.getItem('email');
      console.log(this.email);
      var body = {
        email: this.email,
        event: "justaminute"

      }
      console.log(body);
      this.pushevent.addComment(body).subscribe(res => {
        console.log(JSON.stringify(res));
        this.data = res;
        const alert = this.alertctrl.create({
          title: 'You have registered for this event',
          subTitle: 'Thank You!',
          buttons: ['OK']
        })
        alert.present();

      },
        err => {
          console.log(err);
        });


    }
  }
  talkss(){
  if(this.talks){
    console.log("talkathon");
    console.log('post works');
   this.email=localStorage.getItem('email');
   console.log(this.email);
    var body = {
      email:this.email,
      event: "talkathon"

    }
    console.log(body);
    this.pushevent.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
      this.data = res;
      const alert = this.alertctrl.create({
        title: 'You have registered for this event',
        subTitle: 'Thank You!',
        buttons: ['OK']
      })
      alert.present();

    },
      err => {
        console.log(err);
      });
    }

  }
  ideass()
  {
    if(this.ideas){

    console.log("ideabucket");
    console.log('post works');
   this.email=localStorage.getItem('email');
   console.log(this.email);
    var body = {
      email:this.email,
      event: "ideabucket"

    }
    console.log(body);
    this.pushevent.addComment(body).subscribe(res => {
      console.log(JSON.stringify(res));
      this.data = res;
      const alert = this.alertctrl.create({
        title: 'You have registered for this event',
        subTitle: 'Thank You!',
        buttons: ['OK']
      })
      alert.present();

    },
      err => {
        console.log(err);
      });  
    }
  }

  reg() {
    if (this.mobiledevs) {
      console.log("mobileapps");
      console.log('post works');
     this.email=localStorage.getItem('email');
     console.log(this.email);
      var body = {
        email:this.email,
        event: "Mobileappdev"

      }
      console.log(body);
      this.pushevent.addComment(body).subscribe(res => {
        console.log(JSON.stringify(res));
        this.data = res;
        const alert = this.alertctrl.create({
          title: 'You have registered for this event',
          subTitle: 'Thank You!',
          buttons: ['OK']
        })
        alert.present();

      },
        err => {
          console.log(err);
        });
    }
   
  }
  onHa() {
    if (this.accordionExapanded1) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded1 = !this.accordionExapanded1;
  }
  onIb() {
    if (this.accordionExapanded2) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded2 = !this.accordionExapanded2;
  }
  onTc() {
    if (this.accordionExapanded3) {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "0px");
    } else {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded3 = !this.accordionExapanded3;
  }
  onJa() {
    if (this.accordionExapanded4) {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded4 = !this.accordionExapanded4;
  }

  }
