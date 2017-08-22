import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceSheetComponent } from "app/balance-sheet/balance-sheet.component";
import { CashFlowComponent } from "app/cash-flow/cash-flow.component";
// import { FamilyComponent } from "app/family/family.component";
import { IncomeConfirmationComponent } from "app/income-confirmation/income-confirmation.component";
import { LifeEventComponent } from "app/life-event/life-event.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'balance-sheet', loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetModule' },
  { path: 'cash-flow', loadChildren: './cash-flow/cash-flow.module#CashFlowModule' },
  { path: 'family', loadChildren: './family/family.module#FamilyModule' },
  { path: 'income-confirmation', loadChildren: './income-confirmation/income-confirmation.module#IncomeConfirmationModule' },
  { path: 'life-event', loadChildren: './life-event/life-event.module#LifeEventModule' },
  // { path: '', redirectTo: 'family', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
