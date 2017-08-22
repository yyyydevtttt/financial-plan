import { FinancialPlanPage } from './app.po';

describe('financial-plan App', () => {
  let page: FinancialPlanPage;

  beforeEach(() => {
    page = new FinancialPlanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
