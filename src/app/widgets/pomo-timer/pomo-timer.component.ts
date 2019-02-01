import { Component, OnInit, OnDestroy } from '@angular/core';
import { PomoTimerService } from 'src/app/services/pomo-timer.service';

@Component({
  selector: 'app-pomo-timer',
  templateUrl: './pomo-timer.component.html',
  styleUrls: ['./pomo-timer.component.scss']
})
export class PomoTimerComponent implements OnInit {

  startPauseLabel = 'Start';

  constructor(public timerService: PomoTimerService) { }

  ngOnInit() {
    this.timerService.isCounting$.subscribe(counting => {
      this.startPauseLabel = counting ? 'Cancel' : 'Start';
    });
  }

  onStartPause() {
    if (!this.timerService.isActive()) {
      this.timerService.start();
    } else {
      this.timerService.stop();
    }
  }

  onReset() {
    this.timerService.reset();
  }

  onSetTime(pomodoroTime: string) {
    this.timerService.setTime(pomodoroTime);
  }

}
