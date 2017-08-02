import { MultiViewPage } from './app.po';

describe('multi-view App', () => {
  let page: MultiViewPage;

  beforeEach(() => {
    page = new MultiViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
