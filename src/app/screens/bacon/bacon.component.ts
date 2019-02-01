import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiQueryService } from 'src/app/services/api-query.service';

@Component({
  selector: 'app-bacon',
  templateUrl: './bacon.component.html',
  styleUrls: ['./bacon.component.scss']
})
export class BaconComponent implements OnInit {

  meat$: Observable<string>;
  constructor(private queryService: ApiQueryService) { }

  ngOnInit() {
    this.meat$ = this.queryService.getMeat();
  }

}
