import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { AboutPage } from '../pages/about/about';
import { HistoryPage } from '../pages/history/history';
import { AchievementsPage } from '../pages/achievements/achievements';
import { SettingsPage } from '../pages/settings/settings';
import { LegalPage } from '../pages/legal/legal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Map', component: Page1 },
      { title: 'About', component: AboutPage },
      { title: 'History', component: HistoryPage },
      { title: 'Achievements', component: AchievementsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Legal', component: LegalPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
