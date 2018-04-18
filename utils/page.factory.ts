import { HomePage } from '@doodle/page_objects';

export class PageFactory {
  static getPageByName(pageName: string): HomePage {
    switch (pageName) {
      case 'Homepage':
        return new HomePage();

      default:
        throw new Error(`cannot find page with ${pageName}`);
    }
  }
}
