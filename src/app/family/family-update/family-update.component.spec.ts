import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyUpdateComponent } from './family-update.component';

describe('FamilyUpdateComponent', () => {
  let component: FamilyUpdateComponent;
  let fixture: ComponentFixture<FamilyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
