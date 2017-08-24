import { Component, OnInit } from '@angular/core';
import { BalanceSheetService } from "app/balance-sheet/shared/balance-sheet.service";
import { BalanceSheetItem } from "app/balance-sheet/shared/balance-sheet-item";

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit {

  private liabilities: BalanceSheetItem[];

  constructor(
    private balanceSheetService: BalanceSheetService
  ) { }

  private getLiabilities() {
    this.balanceSheetService.getLiabilities()
      .then(liabilities => this.liabilities = liabilities);
  }

  ngOnInit() {
    this.liabilities = [];
    this.getLiabilities();
  }

  public calcLiabilityTotal() {
    return this.balanceSheetService.calcMoneyTotal(this.liabilities);
  }

}
