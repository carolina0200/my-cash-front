import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath('/html/body/app-root/p/app-home-registro/mat-toolbar/mat-toolbar-row/span')).getText() as Promise<string>;
  }
}