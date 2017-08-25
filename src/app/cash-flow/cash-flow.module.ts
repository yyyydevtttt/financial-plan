import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from "app/cash-flow/cash-flow.component";
import { FlowTableComponent } from './flow-table/flow-table.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CashFlowRoutingModule
  ],
  declarations: [CashFlowComponent, FlowTableComponent]
})
export class CashFlowModule { }
