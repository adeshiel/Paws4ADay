import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Request page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class RequestPage{

req = ""
desc = ""
address = ""
requestText = ""

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
   }

addReq(){
	this.requestText = "Request Sent";
}


}
