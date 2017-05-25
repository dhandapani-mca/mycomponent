import { MycomponentPage } from './app.po';

describe('mycomponent App', () => {
  let page: MycomponentPage;

  beforeEach(() => {
    page = new MycomponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
