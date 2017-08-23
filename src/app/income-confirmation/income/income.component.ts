import { Component, OnInit } from '@angular/core';

import { IncomeService } from '../../shared/services/income/income.service';

import { Income } from '../../shared/services/income/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  husband: Income;
  wife: Income;

  constructor(private incomeSercice: IncomeService) { }

  ngOnInit() {
    this.husband = this.incomeSercice.husband;
    this.wife = this.incomeSercice.wife;
  }

  calcTotalAfterTaxIncome() {
    return this.incomeSercice.totalAfterTaxIncome;
  }
}

