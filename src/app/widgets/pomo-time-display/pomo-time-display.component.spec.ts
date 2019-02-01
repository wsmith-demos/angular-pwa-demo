import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomoTimeDisplayComponent } from './pomo-time-display.component';

describe('PomoTimeDisplayComponent', () => {
  let component: PomoTimeDisplayComponent;
  let fixture: ComponentFixture<PomoTimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomoTimeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomoTimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
