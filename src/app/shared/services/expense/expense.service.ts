import { Injectable } from '@angular/core';

import { Expense } from './expense';

@Injectable()
export class ExpenseService {

  base: Expense;
  residence: Expense;
  vehicle: Expense;
  education: Expense;
  insurance: Expense;
  another: Expense;

  get totalExpenses(): number {
    return this.base.yearly +
           this.residence.yearly +
           this.vehicle.yearly +
           this.education.yearly +
           this.insurance.yearly +
           this.another.yearly;
  }

  constructor() {
    this.base = new Expense(0, 0);
    this.residence = new Expense(0, 0);
    this.vehicle = new Expense(0, 0);
    this.education = new Expense(0, 0);
    this.insurance = new Expense(0, 0);
    this.another = new Expense(0, 0);
  }
}
