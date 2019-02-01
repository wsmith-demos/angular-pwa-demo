import { TestBed } from '@angular/core/testing';

import { PomoTimerService } from './pomo-timer.service';

describe('PomoTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PomoTimerService = TestBed.get(PomoTimerService);
    expect(service).toBeTruthy();
  });
});
