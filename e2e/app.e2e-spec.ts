import { PpmFromSpacePage } from './app.po';

describe('ppm-from-space App', () => {
  let page: PpmFromSpacePage;

  beforeEach(() => {
    page = new PpmFromSpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
