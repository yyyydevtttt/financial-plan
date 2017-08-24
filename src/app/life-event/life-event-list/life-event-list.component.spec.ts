import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventListComponent } from './life-event-list.component';

describe('LifeEventListComponent', () => {
  let component: LifeEventListComponent;
  let fixture: ComponentFixture<LifeEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
