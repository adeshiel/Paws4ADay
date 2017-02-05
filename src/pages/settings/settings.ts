import { Component } from '@angular/core';
import { App, NavController, NavParams, ViewController } from 'ionic-angular';
import { PetsPage } from '../pets/pets';


/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public viewCtrl: ViewController ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goToPets(){
  	this.appCtrl.getRootNav().push(PetsPage);
  }

}
