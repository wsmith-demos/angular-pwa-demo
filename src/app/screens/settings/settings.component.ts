import { Component, OnInit, OnDestroy } from '@angular/core';
import { PomoTimerService } from 'src/app/services/pomo-timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private timerService: PomoTimerService ) { }

  ngOnInit() {
  }

}
