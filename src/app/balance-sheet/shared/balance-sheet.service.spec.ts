import { TestBed, inject } from '@angular/core/testing';

import { BalanceSheetService } from './balance-sheet.service';

describe('BalanceSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalanceSheetService]
    });
  });

  it('should be created', inject([BalanceSheetService], (service: BalanceSheetService) => {
    expect(service).toBeTruthy();
  }));
});
