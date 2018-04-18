import { Page } from './abstract.page';
import { SearchComponent } from '@doodle/components';

export class HomePage extends Page {
  searchComponent: SearchComponent = new SearchComponent();

  public search(query: string) {
    this.searchComponent.bindQuery(query);
    this.searchComponent.searh();
  }
}
