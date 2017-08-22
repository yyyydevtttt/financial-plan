import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from "app/cash-flow/cash-flow.component";

@NgModule({
  imports: [
    CommonModule,
    CashFlowRoutingModule
  ],
  declarations: [CashFlowComponent]
})
export class CashFlowModule { }
