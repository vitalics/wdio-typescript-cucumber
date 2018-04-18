import { Client, RawResult, Element } from 'webdriverio';

export abstract class Component extends Function {
  constructor(public parent = $('body')) {
    super();
  }

  public $(
    selector: string,
    parent: Client<RawResult<Element>> & RawResult<Element> = this.parent
  ): Client<RawResult<Element>> & RawResult<Element> {
    return parent.$(selector);
  }

  public $$(
    selector: string,
    parent: Client<RawResult<Element>> & RawResult<Element> = this.parent
  ): Client<RawResult<Element>>[] & RawResult<Element>[] {
    return parent.$$(selector);
  }
}
