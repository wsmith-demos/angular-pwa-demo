import { Injectable } from '@angular/core';
import { Observable, Subject, timer, BehaviorSubject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import * as moment from 'moment';
import * as momentDurationFormatSetup from 'moment-duration-format';
import { PugNameService } from './pug-name.service';
momentDurationFormatSetup(moment);

@Injectable({
  providedIn: 'root'
})
export class PomoTimerService {
  private onStopTimer$ = new Subject<void>();

  public isCounting$ = new BehaviorSubject<boolean>(false);

  public startTime: any;
  public endTime: any;
  private durationMsTotal: number;
  private defaultDuration = <any>moment.duration('00:25:00');
  private currentDuration = this.defaultDuration;
  public remainingTime$ = new BehaviorSubject<string>('-');
  public counterProgress$ = new BehaviorSubject<number>(100);

  private counter$: Observable<number>;

  constructor(private pugService: PugNameService) {
    console.log('Pomodoro Timer Service');
    this.remainingTime$.next(this.currentDuration.format(':mm:ss'));
  }

  isActive(): boolean {
    return this.isCounting$.value;
  }

  start() {
    console.log('Timer service: start');
    this.startTime = moment();
    this.endTime = moment().add(this.currentDuration);
    this.durationMsTotal = this.endTime.diff(moment(), 'milliseconds');
    this.isCounting$.next(true);
    this.counter$ = timer(0, 200).pipe(
      map(x => {
        const secondsRemain = this.endTime.diff(moment(), 'milliseconds');
        const elapsed = <any>moment.duration(this.endTime.diff(moment()));

        this.remainingTime$.next(elapsed.format(':mm:ss'));
        const percentComplete = Math.floor(
          (secondsRemain / this.durationMsTotal) * 100.0
        );
        this.counterProgress$.next(Math.max(percentComplete, 0));

        return percentComplete;
      }),
      takeUntil(this.onStopTimer$)
    );

    this.counter$.subscribe(observed => {
      if (observed <= 0) {
        console.log('Finished');
        this.finished();
        if (this.durationMsTotal > 1000000 ||
          this.durationMsTotal < 10000) { // < 10 for testing cheaters
            // Pug EARNED!
            const pugName = this.pugService.earnPug();
            this.showNotification('Pug Earned: ' + pugName, 'Pomodoro Complete.');
        } else {
          this.showNotification('Break Over', 'Timer Elapsed.');
        }
      }
    });

    console.log('Counter Init.');
  }

  stop() {
    this.onStopTimer$.next();
    this.isCounting$.next(false);
  }

  finished() {
    console.log('Pomodoro complete!');
    this.reset();
  }

  reset() {
    this.stop();
    this.counterProgress$.next(100);
    this.remainingTime$.next(this.currentDuration.format(':mm:ss'));
    this.endTime = null;
  }

  setTime(duration: string) {
      this.currentDuration = <any>moment.duration(duration);
      this.remainingTime$.next(this.currentDuration.format(':mm:ss'));
  }

  showNotification(msg: string, title = 'Pug-o-doro') {
    if (!('Notification' in window)) {
      alert(msg);
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const n = new Notification(title, {body: msg, icon: 'favicon.ico'});
        } else {
          alert(msg);
        }
      });
    }
  }
}
