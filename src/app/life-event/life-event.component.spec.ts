import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventComponent } from './life-event.component';

describe('LifeEventComponent', () => {
  let component: LifeEventComponent;
  let fixture: ComponentFixture<LifeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
