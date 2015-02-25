'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('App'));

  // Test service availability
  it('check the existence of card factory', inject(function(CardService) {
      expect(CardService).toBeDefined();
    }));
});