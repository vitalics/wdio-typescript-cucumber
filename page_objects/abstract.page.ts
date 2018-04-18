import { Client, RawResult } from 'webdriverio';

export abstract class Page extends Function {
  public title: Client<string> & string = browser.getTitle();

  constructor(public url: string = '') {
    super();
  }

  open(url: string = this.url): null {
    return browser.url(url).value;
  }
}
