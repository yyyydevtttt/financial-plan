import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyAlertComponent } from './family-alert.component';

describe('FamilyAlertComponent', () => {
  let component: FamilyAlertComponent;
  let fixture: ComponentFixture<FamilyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
