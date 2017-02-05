import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'APP_ID'
  }
};

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { AboutPage } from '../pages/about/about';
import { HistoryPage } from '../pages/history/history';
import { AchievementsPage } from '../pages/achievements/achievements';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { LegalPage } from '../pages/legal/legal';
import { PetsPage } from '../pages/pets/pets';
import { RequestPage } from '../pages/request/request';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    AboutPage,
    HistoryPage,
    AchievementsPage,
    SettingsPage,
    HelpPage,
    LegalPage,
    PetsPage,
    RequestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    AboutPage,
    HistoryPage,
    AchievementsPage,
    SettingsPage,
    HelpPage,
    LegalPage,
    PetsPage,
    RequestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
