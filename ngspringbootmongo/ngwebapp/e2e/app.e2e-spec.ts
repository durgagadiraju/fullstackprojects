import { NgwebappPage } from './app.po';

describe('ngwebapp App', () => {
  let page: NgwebappPage;

  beforeEach(() => {
    page = new NgwebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
