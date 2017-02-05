import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Achievements page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-achievements',
  templateUrl: 'achievements.html'
})
export class AchievementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  trophies = {bronze: "Bronze", silver: "Silver", gold: "Gold", none: "None"};

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementsPage');
  }

}
