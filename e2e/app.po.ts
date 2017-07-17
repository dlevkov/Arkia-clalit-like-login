import { browser, by, element } from 'protractor';

export class ClalitLikeLoginPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dl-root h1')).getText();
  }
}
