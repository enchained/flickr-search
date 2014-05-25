'use strict';


(function() {
    var app = angular.module('flickr-search', ['ui.bootstrap']);
    
    app.controller('SearchController', function($scope) {
        var search = this;
        
        $scope.fieldChange = function() {
            $scope.emptySubmitted = false;
        };
               

        
        $scope.splitArray = function(step) {
            var i, j;
            $scope.pictureRows = [];
            for (i = 0, j = $scope.pictures.length; i < j; i += step) {
                $scope.pictureRows.push($scope.pictures.slice(i, i + step));
            }
        };
        
        $scope.fetchOnePage = function(pageNumber) {
            if (!$scope.keywords) {
                return;
            }
            $scope.failed = false;
            $.ajax({
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d70b688ec8e8dccee57c3fc1232c72b4&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags="                    + $scope.keywords + "&page=" + pageNumber,
                dataType: "jsonp",
                jsonpCallback: 'jsonFlickrFeed',
                success: function(results) {
                    
                    if (results.photos.photo.length === 0) {
                        $scope.showNav = false;
                        $scope.message = "По запросу «" + $scope.keywords + "» ничего не найдено.";
                        $scope.pictureRows = [];
                        $scope.showMessage = true;
                        $scope.searchForm.$setPristine();
                        $scope.$apply();
                        return;
                    }

                    $scope.$apply(function() {
//                        console.log(results);
                        angular.forEach(results.photos.photo, function(value, key) {
                            $scope.pictures.push({
                                title: value.title,
                                img: value.url_q,
                                flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id
                            });
                        });

                        $scope.splitArray(4);
                        $scope.itemsPerPage = results.photos.perpage;
                        $scope.totalItems = parseInt(results.photos.total);
                        $scope.showNav = true;
                        $scope.fillNav($scope.currentPage, $scope.totalItems, $scope.itemsPerPage);
                        $scope.failed = false;
                    });
                },
                error: function(error) {
                    $scope.$apply(function() {
                        $scope.failed = true;
                    });
                }
            });
        };
                
        $scope.fillNav = function(currentPage, totalItems, itemsPerPage) {
            //for some reason even if there is thousands of pages in he Flickr response, it shows only the first 335, after that iteates 335 page over and overю 4020 is 335 times 12.
            totalItems = (totalItems > 4020) ? 4020 : totalItems;
            
            $scope.itemsPerPage = itemsPerPage;
            $scope.totalItems = totalItems;
            $scope.maxSize = 9;
        };

        $scope.setPage = function (pageNumber) {
            $scope.pictures = [];
            if (pageNumber) {
                $scope.currentPage = pageNumber;
            }
            $scope.fetchOnePage($scope.currentPage);
        };

        $scope.$watch('currentPage', function() {
            $scope.setPage();
        });
        
        $scope.newSearch = function() {
            $scope.showMessage = false;
            if ($scope.keywords === undefined) {
                $scope.emptySubmitted = true;
            } else {
                $scope.setPage(1);
            }
        };
        
    });
    
})();
