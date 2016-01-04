'use strict';

/**
 */
angular.module('icr-style-guide')
  .directive('codeSnippet', function () {
    console.log('loaded directive');
    return {
        restrict: 'EA',
        transclude: true,
        templateURL: '../views/code-snippet.html',
        link: function (scope, element) {
          scope.code = element.html();
        }
    };
});
