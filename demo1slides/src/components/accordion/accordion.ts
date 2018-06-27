import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import {NavController} from 'ionic-angular' 
import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';
import { PusheventProvider } from '../../providers/pushevent/pushevent';



/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {
  data;
  email;
@ViewChild('iotv') iots;
@ViewChild('blockchainv') blockchains;
@ViewChild('machinelearningv') machinelearnings;
@ViewChild('cybersecurityv') cybersecuritys;
@ViewChild('bigdatav') bigdatas;

  doAlert(){
    
    let alert = this.alerCtrl.create({
      title: 'Added!!',
      message: 'Event is added in your list!!',
      buttons: ['Ok']
    });
    alert.present();
  }
  accordionExapanded = false;
  @ViewChild("iot") cardContent: any;
  accordionExapanded1 = false;
  @ViewChild("bc") cardContent1: any;
  accordionExapanded2 = false;
  @ViewChild("ml") cardContent2: any;
  accordionExapanded3 = false;
  @ViewChild("cs") cardContent3: any;
  accordionExapanded4 = false;
  @ViewChild("bd") cardContent4: any;

  constructor(public pushevent:PusheventProvider,public alertctrl: AlertController,public navCtrl:NavController,public renderer: Renderer,public alerCtrl: AlertController) {
  }
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    }

    a()
    {
       if(this.iots)
       {
        console.log("iot");
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "iot"
  
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
       if(this.blockchains)
       {
        console.log("blockchain");
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "blockchain"
  
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
       if(this.machinelearnings)
       {
        console.log("machinelearning");
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "machinelearning"
  
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
       if(this.cybersecuritys)
       {
        console.log("cybersecurity");
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "cybersecurity"
  
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
       if(this.bigdatas)
       {
        console.log("bigdata");
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "bigdata"
  
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

  onIot() {
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
    this.navCtrl.push(HomePage)
  }
  onBc() {
    if (this.accordionExapanded1) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded1 = !this.accordionExapanded1;
  }
  onMl() {
    if (this.accordionExapanded2) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded2 = !this.accordionExapanded2;
  }
  onBd() {
    if (this.accordionExapanded4) {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded4 = !this.accordionExapanded4;
  }
  onCs() {
    if (this.accordionExapanded3) {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded3 = !this.accordionExapanded3;
  }   
  }
