'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Seer App', function() {
  describe('Card list view', function() {
    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('should filter cards as a user types into the search box', function() {
      
      var cardList = element.all(by.repeater('card in cards'));
      var query = element(by.model('query'));
      
      expect(cardList.count()).toBe(4);
      
      query.sendKeys('eightaudaciouseggs');
      expect(cardList.count()).toBe(0);
    });
  });
});
