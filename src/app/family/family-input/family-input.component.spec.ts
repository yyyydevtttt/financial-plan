import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInputComponent } from './family-input.component';

describe('FamilyInputComponent', () => {
  let component: FamilyInputComponent;
  let fixture: ComponentFixture<FamilyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
