import { TestBed, inject } from '@angular/core/testing';

import { IncomeService } from './income.service';

describe('IncomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeService]
    });
  });

  it('should be created', inject([IncomeService], (service: IncomeService) => {
    expect(service).toBeTruthy();
  }));
});
