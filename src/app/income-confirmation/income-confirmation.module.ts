import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from "app/income-confirmation/income-confirmation.component";
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IncomeConfirmationRoutingModule
  ],
  declarations: [IncomeConfirmationComponent, IncomeComponent, ExpenseComponent]
})
export class IncomeConfirmationModule { }
