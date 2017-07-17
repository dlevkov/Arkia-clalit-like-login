import { ClalitLikeLoginPage } from './app.po';

describe('clalit-like-login App', () => {
  let page: ClalitLikeLoginPage;

  beforeEach(() => {
    page = new ClalitLikeLoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dl!');
  });
});
