import { SpendingTrackerPage } from './app.po';

describe('spending-tracker App', function() {
  let page: SpendingTrackerPage;

  beforeEach(() => {
    page = new SpendingTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
