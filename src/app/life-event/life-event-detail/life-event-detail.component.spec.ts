import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventDetailComponent } from './life-event-detail.component';

describe('LifeEventDetailComponent', () => {
  let component: LifeEventDetailComponent;
  let fixture: ComponentFixture<LifeEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
