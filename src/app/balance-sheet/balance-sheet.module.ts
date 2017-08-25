import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from "app/balance-sheet/balance-sheet.component";
import { AssetComponent } from './asset/asset.component';
import { LiabilityComponent } from './liability/liability.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
// import { BalanceSheetService } from "app/balance-sheet/shared/balance-sheet.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BalanceSheetRoutingModule
  ],
  declarations: [BalanceSheetComponent, AssetComponent, LiabilityComponent],
  providers: []
})
export class BalanceSheetModule { }
