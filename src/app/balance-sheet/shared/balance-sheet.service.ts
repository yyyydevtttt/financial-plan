import { Injectable } from '@angular/core';
import { BalanceSheetItem } from "app/balance-sheet/shared/balance-sheet-item";
import { ASSETS } from "app/balance-sheet/shared/asset";
import { LIABILITIES } from "app/balance-sheet/shared/liabilities";

@Injectable()
export class BalanceSheetService {

  private balanceSheetItem: BalanceSheetItem;

  constructor(
  ) {}

  public getAssets(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(ASSETS);
  }

  public getLiabilities(): Promise<BalanceSheetItem[]>  {
    return Promise.resolve(LIABILITIES);
  }

  public calcMoneyTotal(items: BalanceSheetItem[]) {
    let sum = 0;
    items.forEach(item => {
      sum += isNaN(item.money) ? 0 : Number(item.money); 
    });
    return sum;
  }


}
