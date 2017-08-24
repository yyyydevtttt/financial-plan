import { Component, OnInit } from '@angular/core';
import { BalanceSheetItem } from "app/balance-sheet/shared/balance-sheet-item";
import { BalanceSheetService } from "app/balance-sheet/shared/balance-sheet.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
  providers: [BalanceSheetService]
})
export class AssetComponent implements OnInit {

  private assets: BalanceSheetItem[];

  constructor(
    private balanceSheetService: BalanceSheetService
  ) { }

  private getAssets() {
    this.balanceSheetService.getAssets()
      .then(assets => this.assets = assets);
  }

  ngOnInit() {
    this.assets = [];
    this.getAssets();
  }

  public calcAssetTotal() {
    return this.balanceSheetService.calcMoneyTotal(this.assets);
  }

}
