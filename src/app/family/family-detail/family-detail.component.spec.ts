import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDetailComponent } from './family-detail.component';

describe('FamilyDetailComponent', () => {
  let component: FamilyDetailComponent;
  let fixture: ComponentFixture<FamilyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
