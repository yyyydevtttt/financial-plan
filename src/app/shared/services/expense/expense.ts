export class Expense {

  public monthly: number;
  public suddenly: number;

  get yearly(): number {
    return (this.monthly * 12) + this.suddenly;
  }

  constructor(monthly, suddenly) {
    this.monthly = monthly;
    this.suddenly = suddenly;
  }
}
