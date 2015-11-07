(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, markedProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //hljs
      markedProvider.setOptions({
            gfm: true,
            tables: true,
            highlight: function (code, lang) {
                  if (lang) {
                        return hljs.highlight(lang, code, true).value;
                  } else {
                        return hljs.highlightAuto(code).value;
                  }
            }
      });

  }

})();
