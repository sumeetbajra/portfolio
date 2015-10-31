(function() {
  'use strict';

  angular
    .module('portfolio')
    .run(runBlock)
    .animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(500, done)
      return function() {
        element.stop();
      }
    }
  }
});

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
