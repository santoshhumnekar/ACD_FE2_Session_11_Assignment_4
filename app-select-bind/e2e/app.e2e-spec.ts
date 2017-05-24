import { AppSelectBindPage } from './app.po';

describe('app-select-bind App', function() {
  let page: AppSelectBindPage;

  beforeEach(() => {
    page = new AppSelectBindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
