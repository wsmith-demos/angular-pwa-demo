import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PomoTimerService } from 'src/app/services/pomo-timer.service';

@Component({
  selector: 'app-pomo-time-display',
  templateUrl: './pomo-time-display.component.html',
  styleUrls: ['./pomo-time-display.component.scss']
})
export class PomoTimeDisplayComponent implements OnInit {

  @Input() displayText = '-:-';
  @Input() counterProgress = 100;

  constructor() { }

  ngOnInit() {
  }

}
