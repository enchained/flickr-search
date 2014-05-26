'use strict';


(function() {
    var app = angular.module('flickr-search', ['ui.bootstrap', 'template-directives']);
   
    app.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
        var currentResultKeywords, prevResultKeywords;
        $scope.resultsPerPage = 12;
        $scope.maxNavLength = 9;
        $scope.totalResultsLimit = 4020;
        
        // Setting current page anywhere will trigger search results loading
        $scope.$watch('currentPage', function() {
            $scope.loadSelectedPage($scope.currentPage);
        });

        
        $scope.newSearch = function() {
            
            // If submitted an empty input, it will highlight in red
            if ($scope.typedInKeywords === undefined) {
                $scope.emptyStringSubmitted = true;
                return;
            } 
            
            prevResultKeywords = currentResultKeywords;
            currentResultKeywords = $scope.typedInKeywords;
            
            // If it is not the first search, should manually trigger first page loading if it is already current page
            if (prevResultKeywords) {
                if ($scope.currentPage === 1) {
                    $scope.loadSelectedPage(1);
                    return;
                } 
            }
            
            // If it is the very first search, setting the first page to trigger loading
            $scope.currentPage = 1;           
        };
        
        
        $scope.clearHighlightWarning = function() {
            $scope.emptyStringSubmitted = false;
        };
        
        
        $scope.loadSelectedPage = function(pageNumber) {
            
            if (!currentResultKeywords) {
                return;
            }
            

            
            
            // When keywords entered, but not submitted, return current search keywords on page turn
            $scope.typedInKeywords = currentResultKeywords;

            $scope.searchFailed = false;
            $scope.pictures = [];
            
            $http.jsonp("https://api.flickr.com/services/rest/", {
                params : {
                    method: "flickr.photos.search",
                    tags: currentResultKeywords,
                    api_key: "d70b688ec8e8dccee57c3fc1232c72b4",
                    per_page: $scope.resultsPerPage,
                    extras: "url_q",
                    format: "json",
                    jsoncallback: "JSON_CALLBACK",
                    media: "photos",
                    sort: "relevance",
                    page: pageNumber
                }
            })
            .success(function(results, status, headers, config) {
                if (results.photos.photo.length === 0) {
                    $scope.showNav = false;
                    $scope.message = "По запросу «" + currentResultKeywords + "» ничего не найдено.";
                    $scope.pictureRows = [];
                    $scope.searchFailed = true;
                    $scope.searchForm.$setPristine();
                    return;
                }
                
                // Fill pictures array with search results
                angular.forEach(results.photos.photo, function(value, key) {
                    $scope.pictures.push({
                        title: value.title,
                        img: value.url_q,
                        flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id
                    });
                });
                
                // AngularJS needs 2d array to fill Bootstrap grid
                $scope.generateOutputGrid($scope.pictures);
                
                $scope.totalResults = parseInt(results.photos.total);
                // For some reason even if there is thousands of pages in the Flickr response, it shows only the first 335, after that iterates page number 335 over and over. 4020 is 335 times 12.
                if ($scope.totalResults > $scope.totalResultsLimit) {
                    $scope.totalResults = $scope.totalResultsLimit;
                }
                
                $scope.showNav = true;
                $scope.searchFailed = false;
                
            }).error(function(data, status, headers, config) {
                // There is no error handling for JSONP calls, so it is impossible to get error codes
                $scope.showNav = false;
                $scope.message = "Произошла ошибка. Flickr API недоступен.";
                $scope.pictureRows = [];
                $scope.searchForm.$setPristine();
                $scope.searchFailed = true;
                return;
            });
        };
        
        // AngularJS needs 2d array to fill Bootstrap grid
        $scope.generateOutputGrid = function(picturesArr) {
            var i, j, row, columns = 4;
            $scope.pictureRows = [];
            for (i = 0, j = picturesArr.length; i < j; i += columns) {
                row = picturesArr.slice(i, i + columns);
                $scope.pictureRows.push(row);
            }
        };
        
    }]);

})();
