(function() {
  'use strict';

  angular
    .module('angularSwipeAndSnap')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
