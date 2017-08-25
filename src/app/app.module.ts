import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FamilyComponent } from './family/family.component';
import { IncomeConfirmationComponent } from './income-confirmation/income-confirmation.component';
import { LifeEventComponent } from './life-event/life-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FamilyService } from "app/shared/services/family/family.service";
import { IncomeService } from "app/shared/services/income/income.service";
import { ExpenseService } from "app/shared/services/expense/expense.service";
import { LifeEventService } from "app/shared/services/life-event/life-event.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
    FamilyService,
    LifeEventService,
    IncomeService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
