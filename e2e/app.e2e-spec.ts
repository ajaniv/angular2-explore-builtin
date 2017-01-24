import { BuiltinPage } from './app.po';

describe('builtin App', function() {
  let page: BuiltinPage;

  beforeEach(() => {
    page = new BuiltinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
