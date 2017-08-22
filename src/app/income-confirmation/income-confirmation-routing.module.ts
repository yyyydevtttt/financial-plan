import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeConfirmationComponent } from "app/income-confirmation/income-confirmation.component";

const routes: Routes = [
  { path: '', component: IncomeConfirmationComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeConfirmationRoutingModule { }
