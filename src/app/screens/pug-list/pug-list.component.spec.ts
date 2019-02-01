import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PugListComponent } from './pug-list.component';

describe('PugListComponent', () => {
  let component: PugListComponent;
  let fixture: ComponentFixture<PugListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PugListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PugListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
