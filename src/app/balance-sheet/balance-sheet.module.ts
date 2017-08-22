import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from "app/balance-sheet/balance-sheet.component";

@NgModule({
  imports: [
    CommonModule,
    BalanceSheetRoutingModule
  ],
  declarations: [BalanceSheetComponent]
})
export class BalanceSheetModule { }
