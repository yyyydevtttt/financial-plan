export class Income {

  public income: number;
  public incomeTax: number;
  public insurancePremium: number;
  public residentTax: number;

  get afterTaxIncome(): number {
    return this.income - this.incomeTax - this.insurancePremium - this.residentTax;
  }

  constructor(income, incomeTax, insurancePremium, residentTax) {
    this.income = income;
    this.incomeTax = incomeTax;
    this.insurancePremium = insurancePremium;
    this.residentTax = residentTax;
  }
}
