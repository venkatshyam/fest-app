import { Component, ViewChild, OnInit, Renderer } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular' 
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
  selector: 'technical',
  templateUrl: 'technical.html'
})
export class TechnicalComponent {
  data;
  email;
@ViewChild('cadconquerv') cadconquers;
@ViewChild('cognitivev') cognitives;
@ViewChild('electrozenv') electrozens;
@ViewChild('foxhuntv') foxhunts;
@ViewChild('gordianknotv') gordianknots;
@ViewChild('posterv') posters;
@ViewChild('quizv') quizs;
@ViewChild('debugv') debugs;

  accordionExapanded = false;
  @ViewChild("cad") cardContent: any;
  accordionExapanded1 = false;
  @ViewChild("cog") cardContent1: any;
  accordionExapanded2 = false;
  @ViewChild("ele") cardContent2: any;
  accordionExapanded3 = false;
  @ViewChild("fox") cardContent3: any;
  accordionExapanded4 = false;
  @ViewChild("gor") cardContent4: any;
  accordionExapanded5 = false;
  @ViewChild("pos") cardContent5: any;
  accordionExapanded6 = false;
  @ViewChild("tech") cardContent6: any;
  accordionExapanded7 = false;
  @ViewChild("deb") cardContent7: any;
  

  constructor(public pushevent:PusheventProvider,public navCtrl:NavController,public renderer: Renderer,public alertctrl: AlertController) {
  }
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    
    }
       
      a(){
         if(this.cadconquers)
         {
          console.log("cadconquers");
          console.log('post works');
          this.email = localStorage.getItem('email');
          console.log(this.email);
          var body = {
            email: this.email,
            event: "cadconquers"
    
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
          if(this.cognitives)
          {
            console.log("congnitives");
            console.log('post works');
            this.email = localStorage.getItem('email');
            console.log(this.email);
            var body = {
              email: this.email,
              event: "cognitives"
      
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
            if(this.electrozens)
            {
              console.log("electrozens");
              console.log('post works');
              this.email = localStorage.getItem('email');
              console.log(this.email);
              var body = {
                email: this.email,
                event: "electrozens"
        
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
      if(this.foxhunts)
      {
        console.log("foxhunt");
              console.log('post works');
              this.email = localStorage.getItem('email');
              console.log(this.email);
              var body = {
                email: this.email,
                event: "foxhunt"
        
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
         if(this.gordianknots)
         {
          console.log('post works');
          this.email = localStorage.getItem('email');
          console.log(this.email);
          var body = {
            email: this.email,
            event: "gurdianknots"
    
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
      f()
      {
       if(this.posters)
       {
        console.log('post works');
        this.email = localStorage.getItem('email');
        console.log(this.email);
        var body = {
          email: this.email,
          event: "posters"
  
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
      g()
      {
          if(this.quizs)
          {
            console.log('post works');
            this.email = localStorage.getItem('email');
            console.log(this.email);
            var body = {
              email: this.email,
              event: "quizs"
      
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
      h()
      {
         if(this.debugs){
          console.log('post works');
          this.email = localStorage.getItem('email');
          console.log(this.email);
          var body = {
            email: this.email,
            event: "debugs"
    
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


 



  onCad() {
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
    let alert = this.alertctrl.create({
      title: 'You are registered  for this event!',
      subTitle: 'Thank You!',
      buttons: ['OK']
    });
    alert.present();
  }
  onCog() {
    if (this.accordionExapanded1) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded1 = !this.accordionExapanded1;
  }
  onEle() {
    if (this.accordionExapanded2) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded2 = !this.accordionExapanded2;
  }
  onFox() {
    if (this.accordionExapanded3) {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent3.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded3 = !this.accordionExapanded3;
  }
  onGor() {
    if (this.accordionExapanded4) {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent4.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded4 = !this.accordionExapanded4;
  }
  onPos() {
    if (this.accordionExapanded5) {
      this.renderer.setElementStyle(this.cardContent5.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent5.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded5 = !this.accordionExapanded5;
  }
  onTech() {
    if (this.accordionExapanded6) {
      this.renderer.setElementStyle(this.cardContent6.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent6.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded6 = !this.accordionExapanded6;
  }
  onDeb() {
    if (this.accordionExapanded7) {
      this.renderer.setElementStyle(this.cardContent7.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setElementStyle(this.cardContent7.nativeElement, "max-height", "1500px");
    }

    this.accordionExapanded7 = !this.accordionExapanded7;
  }

  }