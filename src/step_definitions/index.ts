import { binding, given, when, then } from 'cucumber-tsflow';

import { PageFactory } from '@doodle/utils';

import { DOODLE_USERS } from '@doodle/constants';

import { config } from 'dotenv';
import { User, Enumirate } from '@doodle/types';
import { HomePage } from '@doodle/page_objects';

let page: HomePage;

@binding()
class MySteps {
  @given(/I open the page "([^"]*)"/)
  public GivenPageAndOpen(pageName: string): void {
    page = PageFactory.getPageByName(pageName);
    page.open();
  }

  @when(/I write query "([^"]*)"/)
  public signUp(query: string): void {
    page.search(query);
  }

  @then(/I see search result/)
  public shouldSeeResult() {
    console.log('done');
  }
}
