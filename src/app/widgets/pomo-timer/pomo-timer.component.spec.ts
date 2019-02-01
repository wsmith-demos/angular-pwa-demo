import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomoTimerComponent } from './pomo-timer.component';

describe('PomoTimerComponent', () => {
  let component: PomoTimerComponent;
  let fixture: ComponentFixture<PomoTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomoTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomoTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
