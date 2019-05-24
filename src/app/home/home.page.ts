import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor (private alert:AlertController){}

  async exibiralerta(){
    let temp= await this.alert.create({
      header:"Alerta para o 2° DS",
      subHeader:"2° DS merece MB?",
      buttons:[{
        text:"Não", 
        handler: function(){
          console.log ("Não merece")
        }
      }, {
        text:"Sim",
        handler: function(){
          console.log ("É merecedor")
        }
      }]
    })
    await temp.present()
  }
}
