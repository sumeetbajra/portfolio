(function() {
  'use strict';

  angular
    .module('portfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
