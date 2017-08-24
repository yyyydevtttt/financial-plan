import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventUpdateComponent } from './life-event-update.component';

describe('LifeEventUpdateComponent', () => {
  let component: LifeEventUpdateComponent;
  let fixture: ComponentFixture<LifeEventUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
