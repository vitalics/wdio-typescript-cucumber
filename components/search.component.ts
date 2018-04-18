import { Component } from '@doodle/components';

export class SearchComponent extends Component {
  constructor() {
    super();
  }
  get inputElement() {
    return this.$('.input__input');
  }
  get serachButton() {
    return this.$('.suggest2-form__button');
  }

  bindQuery(query: string = 'test'): void {
    browser.pause(5000);
    this.inputElement.setValue(query);
  }

  searh(): null {
    return this.serachButton.click().value;
  }
}
