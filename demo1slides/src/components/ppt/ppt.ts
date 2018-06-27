import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import {NavController, Alert, AlertController} from 'ionic-angular' 
import { HomePage } from '../../pages/home/home';
import { CardContent } from 'ionic-angular';
import { PusheventProvider } from '../../providers/pushevent/pushevent';


/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ppt',
  templateUrl: 'ppt.html'
})
export class PptComponent {
 @ViewChild('mechv') mechs;
 @ViewChild('ecev') eces;
 @ViewChild('csev') cses;
 @ViewChild('eeev') eees;
 @ViewChild('itv') its;
 @ViewChild('chemv') chems;
 @ViewChild('civilv') civils;
email;
data;

  accordionExapanded = false;
  @ViewChild("mech") cardContent: any;
  accordionExapanded1 = false;
  @ViewChild("ece") cardContent1: any;
  accordionExapanded2 = false;
  @ViewChild("cse") cardContent2: any;
  accordionExapanded3 = false;
  @ViewChild("eee") cardContent3: any;
  accordionExapanded4 = false;
  @ViewChild("it") cardContent4: any;
  accordionExapanded5 = false;
  @ViewChild("chem") cardContent5: any;
  accordionExapanded6 = false;
  @ViewChild("civil") cardContent6: any;
 
  

  constructor(public pushevent:PusheventProvider,public navCtrl:NavController,public renderer: Renderer,public alertctrl:AlertController) {
  }
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    
    }

mechss()
{
     if(this.mechs)
     {
      console.log("mechppt");
      console.log('post works');
      this.email = localStorage.getItem('email');
      console.log(this.email);
      var body = {
        email: this.email,
        event: "mechppt"

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
ecess()
{
  if(this.eces)
  {
   console.log("eceppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "eceppt"

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
eeess()
{
  if(this.eees)
  {
   console.log("eeeppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "eeeppt"

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
chemss()
{
  if(this.chems)
  {
   console.log("chemppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "chemppt"

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
civilss()
{
  if(this.civils)
  {
   console.log("civilppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "civilppt"

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
itss()
{
  if(this.its)
  {
   console.log("itppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "itppt"

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
csess()
{
  if(this.cses)
  {
   console.log("cseppt");
   console.log('post works');
   this.email = localStorage.getItem('email');
   console.log(this.email);
   var body = {
     email: this.email,
     event: "cseppt"

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
     


  onMech() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "1500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExapanded = !this.accordionExapanded;
  }
  reg(){
    const alert = this.alertctrl.create({
      title: 'You have registered for this event',
      subTitle: 'Thank you!',
      buttons: ['OK']
    });
    alert.present();
  }
  onEce() {
    if (this.accordionExapanded1) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded1 = !this.accordionExapanded1;
  }
  
  onCse() {
    if (this.accordionExapanded2) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded2 = !this.accordionExapanded2;
  }
  onEee() {
    if (this.accordionExapanded3) {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded3 = !this.accordionExapanded3;
  }
  onIt() {
    if (this.accordionExapanded4) {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded4 = !this.accordionExapanded4;
  }
  onChem() {
    if (this.accordionExapanded5) {
      this.renderer.setElementStyle(this.cardContent5.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent5.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded5 = !this.accordionExapanded5;
  }
  onCivil() {
    if (this.accordionExapanded6) {
      this.renderer.setElementStyle(this.cardContent6.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent6.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded6 = !this.accordionExapanded6;
  }
 

  }
