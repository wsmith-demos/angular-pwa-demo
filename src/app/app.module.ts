import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInterfaceModule } from './modules/user-interface/user-interface.module';
import { PugListComponent } from './screens/pug-list/pug-list.component';
import { HomeComponent } from './screens/home/home.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { PomoTimeDisplayComponent } from './widgets/pomo-time-display/pomo-time-display.component';
import { PomoTimerComponent } from './widgets/pomo-timer/pomo-timer.component';
import { ApiQueryService } from './services/api-query.service';
import { HttpClientModule } from '@angular/common/http';
import { BaconComponent } from './screens/bacon/bacon.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PugListComponent,
    HomeComponent,
    SettingsComponent,
    PomoTimeDisplayComponent,
    PomoTimerComponent,
    BaconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInterfaceModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ApiQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
