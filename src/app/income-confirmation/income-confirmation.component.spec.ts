import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeConfirmationComponent } from './income-confirmation.component';

describe('IncomeConfirmationComponent', () => {
  let component: IncomeConfirmationComponent;
  let fixture: ComponentFixture<IncomeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
