import { Injectable } from '@angular/core';

import { Income } from './income';

@Injectable()
export class IncomeService {

  husband: Income;
  wife: Income;

  get totalAfterTaxIncome(): number {
    return this.husband.afterTaxIncome + this.wife.afterTaxIncome;
  };

  constructor() {
    this.husband = new Income(0, 0, 0, 0);
    this.wife = new Income(0, 0, 0, 0);
  }
}