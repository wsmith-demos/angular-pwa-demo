import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PugListComponent } from './screens/pug-list/pug-list.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { BaconComponent } from './screens/bacon/bacon.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pug-list',
    component: PugListComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'bacon',
    component: BaconComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
