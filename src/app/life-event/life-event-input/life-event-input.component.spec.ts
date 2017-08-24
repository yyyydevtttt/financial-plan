import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventInputComponent } from './life-event-input.component';

describe('LifeEventInputComponent', () => {
  let component: LifeEventInputComponent;
  let fixture: ComponentFixture<LifeEventInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
