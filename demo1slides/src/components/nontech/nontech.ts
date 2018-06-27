import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular' ;
import { HomePage } from '../../pages/home/home';
import { PusheventProvider } from '../../providers/pushevent/pushevent';


/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nontech',
  templateUrl: 'nontech.html'
})
export class NontechComponent {
  data;
  email;
  @ViewChild('treasurehunt') treasurehunts;
  @ViewChild('spotdance') spotdances;
  @ViewChild('selfiecontest') selfiecontests;
  @ViewChild('shortfilm') shortfilms;
  @ViewChild('painting') paintings;
  accordionExapanded = false;
  @ViewChild("Th") cardContent: any;
  accordionExapanded1 = false;
  @ViewChild("Sd") cardContent1: any;
  accordionExapanded2 = false;
  @ViewChild("Sc") cardContent2: any;
  accordionExapanded3 = false;
  @ViewChild("Sf") cardContent3: any;
  accordionExapanded4 = false;
  @ViewChild("Pa") cardContent4: any;

  constructor(public pushevent:PusheventProvider,public navCtrl:NavController,public renderer: Renderer,public alertctrl: AlertController) {
  }
  ngOnInit() {

    }

a()
{
if(this.treasurehunts)
{
  console.log("treasure");
  console.log('post works');
  this.email = localStorage.getItem('email');
  console.log(this.email);
  var body = {
    email: this.email,
    event: "treasurehunt"

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
b()
{
  if(this.spotdances)
  {
    
  console.log("spotdance");
  console.log('post works');
  this.email = localStorage.getItem('email');
  console.log(this.email);
  var body = {
    email: this.email,
    event: "spotdance"

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
c()
{
    if(this.selfiecontests)
    {
      console.log("selfiecontest");
      console.log('post works');
      this.email = localStorage.getItem('email');
      console.log(this.email);
      var body = {
        email: this.email,
        event: "selfiecontest"
    
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
d()
{
   if(this.shortfilms)
   {
    console.log("shortfilms");
    console.log('post works');
    this.email = localStorage.getItem('email');
    console.log(this.email);
    var body = {
      email: this.email,
      event: "shortfilm"
  
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
e()
{
  if(this.paintings)
  {
    console.log("paintings");
    console.log('post works');
    this.email = localStorage.getItem('email');
    console.log(this.email);
    var body = {
      email: this.email,
      event: "painting"
  
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


  onTh() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "900px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExapanded = !this.accordionExapanded;
  }
  reg(){
    const alert = this.alertctrl.create({
      title: 'You have registered for this event',
      subTitle: 'Thank You!',
      buttons: ['OK']
    });
    alert.present();
  }
  onSd() {
    if (this.accordionExapanded1) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded1 = !this.accordionExapanded1;
  }
  onSc() {
    if (this.accordionExapanded2) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded2 = !this.accordionExapanded2;
  }
  onSf() {
    if (this.accordionExapanded3) {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "0px");
    } else {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded3 = !this.accordionExapanded3;
  }
  onPa() {
    if (this.accordionExapanded4) {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded4 = !this.accordionExapanded4;
  }

  }
