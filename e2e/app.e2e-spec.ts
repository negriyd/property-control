import { PropertyControlPage } from './app.po';

describe('property-control App', function() {
  let page: PropertyControlPage;

  beforeEach(() => {
    page = new PropertyControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
