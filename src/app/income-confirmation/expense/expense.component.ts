import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../../shared/services/expense/expense.service';
import { Expense } from '../../shared/services/expense/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  base: Expense;
  residence: Expense;
  vehicle: Expense;
  education: Expense;
  insurance: Expense;
  another: Expense;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.base = this.expenseService.base;
    this.residence = this.expenseService.residence;
    this.vehicle = this.expenseService.vehicle;
    this.education = this.expenseService.education;
    this.insurance = this.expenseService.insurance;
    this.another = this.expenseService.another;
  }

  calcTotalExpenses(): number {
    return this.expenseService.totalExpenses;
  }
}
