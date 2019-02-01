import { Component, OnInit, OnDestroy } from '@angular/core';
import { PugNameService } from 'src/app/services/pug-name.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Pug } from 'src/app/interfaces/pug';
import { PomoTimerService } from 'src/app/services/pomo-timer.service';

@Component({
  selector: 'app-pug-list',
  templateUrl: './pug-list.component.html',
  styleUrls: ['./pug-list.component.scss']
})
export class PugListComponent implements OnInit {

  pugs$: BehaviorSubject<Pug[]>;

  sub: any;
  constructor(private pugService: PugNameService,
    private timerService: PomoTimerService) { }

  ngOnInit() {
    this.pugs$ = this.pugService.pugList$;
  }

  clearPugs() {
    this.pugService.clearPugs();
  }
}
