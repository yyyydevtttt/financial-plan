import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashFlowComponent } from "app/cash-flow/cash-flow.component";

const routes: Routes = [
  { path: '', component: CashFlowComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashFlowRoutingModule { }
