'use strict';

/**
 */
angular.module('icr-style-guide')
  .directive('ascii', function () {
    return {
        restrict: 'A',
        replace: false,
        transclude: false,
        scope: true,
        link: function ($scope, element) {

            //Set ascii variables
            var closeTag = '&lt;';
            var openTag = '&gt;';
            var breakTag = '<br />';
            var indent = '&emsp;';

            //Get the current string
            var oldString = element.html();

            //Replace string with ascii code
            var newString = oldString.replace(/>/g, openTag).replace(/</g, closeTag).replace(/#/g, breakTag).replace(/=/g, indent);

            //Print Out the new html
            element.html(newString);
        }
    };
});
