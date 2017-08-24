import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetComponent } from "app/balance-sheet/asset/asset.component";
import { LiabilityComponent } from "app/balance-sheet/liability/liability.component";
import { BalanceSheetService } from "app/balance-sheet/shared/balance-sheet.service";

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css'],
  providers: [BalanceSheetService]
})
export class BalanceSheetComponent implements OnInit {

  @ViewChild(AssetComponent)
  assetComponent: AssetComponent;
  @ViewChild(LiabilityComponent)
  liabilityComponent: LiabilityComponent;

  constructor() { }

  ngOnInit() {
  }

  calcStockholdersEquity(): number {
    return this.assetComponent.calcAssetTotal() - this.liabilityComponent.calcLiabilityTotal();
  }


}
