import { Component } from '@angular/core';

import { SwUpdate, SwPush } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pug-o-doro';

  updateAvailable$: Observable<boolean>;  // Service Worker Update available

  navLinks = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/pug-list', label: 'Pugs Earned', icon: 'pets' },
    { path: '/bacon', label: 'Bacon', icon: 'sentiment_satisfied_alt' }
  ];

  constructor(private swUpdate: SwUpdate, private swPush: SwPush) {
    this.updateAvailable$ = this.swUpdate.available.pipe(
      map( x => {
        return x.type === 'UPDATE_AVAILABLE' ? true : false;
      })
    );

    // Push notifications:
    this.swPush.requestSubscription({
      serverPublicKey:
        // Example VAPID public key I generated with web-push
        // The Voluntary Application Server Identification
        'BIcbHDlVpw46rtAwXVHGmXCLhOxWpjWhUHZ0hjW-b-y35YW7wlIV2sdrE5VT-YIKA3Uc_44zcIxkil-NKJB4lrc'
    }).then( sub => {
      console.log('TODO: Send this to your backend', sub);
    });

  }

  performUpdate() {
    this.swUpdate.activateUpdate().then( () => {
      window.location.reload();
    });
  }
}
