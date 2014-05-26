'use strict';


(function() {

    var app = angular.module('template-directives', []);
    
    app.directive('searchBar', function($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'search-bar.html',
            scope: false,
            transclude: false
        };
    });

    app.directive('alertMessage', function($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'alert-message.html',
            scope: false,
            transclude: false
        };
    });

    app.directive('searchResultsGrid', function($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'search-results-grid.html',
            scope: false,
            transclude: false
        };
    });
    
})();