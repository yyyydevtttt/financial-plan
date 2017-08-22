import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from "app/income-confirmation/income-confirmation.component";

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule
  ],
  declarations: [IncomeConfirmationComponent]
})
export class IncomeConfirmationModule { }
