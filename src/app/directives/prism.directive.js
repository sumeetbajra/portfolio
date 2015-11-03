
angular
  .module('portfolio')
  .directive('code', prism);

	function prism() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.ready(function() {
                    Prism.highlightElement(element[0]);
                });
            }
        }
  };
