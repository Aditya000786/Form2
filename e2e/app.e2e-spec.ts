import { FormsTestingPage } from './app.po';

describe('forms-testing App', () => {
  let page: FormsTestingPage;

  beforeEach(() => {
    page = new FormsTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
