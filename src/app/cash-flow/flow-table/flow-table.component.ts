import { Component, OnInit, Input } from '@angular/core';
import { Human } from "app/shared/services/family/human";
import { LifeEvent } from "app/shared/services/life-event/life-event";
import { FamilyService } from "app/shared/services/family/family.service";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";
import { IncomeService } from "app/shared/services/income/income.service";
import { ExpenseService } from "app/shared/services/expense/expense.service";
import { Income } from "app/shared/services/income/income";
import { Expense } from "app/shared/services/expense/expense";

@Component({
  selector: 'app-flow-table',
  templateUrl: './flow-table.component.html',
  styleUrls: ['./flow-table.component.css']
})
export class FlowTableComponent implements OnInit {

  private readonly COLUMN_SPLIT = 5;
  private readonly PAGE_NO_MAX = 4;

  private family: Human[];
  private lifeEvents: LifeEvent[];

  private baseYear: number = new Date().getFullYear();
  private years: number[] = [];

  private pageNo: number = 0;
    
  constructor(
    private familyService: FamilyService,
    private lifeEventService: LifeEventService,
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.family = this.familyService.list;
    this.lifeEvents = this.lifeEventService.list;
    // console.log(new Date().getFullYear());
    this.setYears();
  }

  setYears() {
    for (let i = 0; i < this.COLUMN_SPLIT; i++) {
      this.years[i] = this.baseYear + i + 1 + this.COLUMN_SPLIT * this.pageNo;
      // console.log(this.years[i]);
    }
  }

  bithdayYear(person: Human) {
    return person.birthday.getFullYear();
  }

  getHusbundIncome() {
    return this.incomeService.husband.income;
  }
  getWifeIncome() {
    return this.incomeService.wife.income;
  }
  calcTotalAfterTaxIncome() {
    return this.incomeService.totalAfterTaxIncome;
  }
  getTotalExpenses() {
    return this.expenseService.totalExpenses;
  }

  // イベント複数を考慮する
  getEventExpense(year: number) {
    let money = 0;
    this.lifeEvents.filter(lifeEvent => {
      if (lifeEvent.year === year) {
        money = lifeEvent.money;
      };
    });
    return money;
  }

  nextPage() {
    this.pageNo++;
    this.setYears();
  }
  backPage() {
    this.pageNo--;
    this.setYears();
  }
  jumpInitialPage() {
    this.pageNo = 0;
    this.setYears();
  }
  jumpLastPage() {
    this.pageNo = this.PAGE_NO_MAX - 1;
    this.setYears();
  }

}
