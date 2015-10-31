/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('portfolio')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('SERVICE_URL', 'https://sumeetbajra.heroku.com');

})();
