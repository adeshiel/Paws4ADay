import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Pets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html'
})
export class PetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  catImg = "https://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-kitten-1.jpg"
  catName = "Luna"

  dogImg = "https://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-puppy-1.jpg"
  dogName = "Ruby"
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage');
  }

}
