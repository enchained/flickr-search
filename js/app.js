'use strict';


(function() {
	var app = angular.module('flickr-search', [ ]);
        
	app.controller('SearchController', ['$scope', function($scope){
        var search = this;
        search.keywords = "";
        search.submitted = false;
        
        this.newSearch = function() {           
            search.submitted = true;
            if (search.keywords) {
                search.fetchOnePage(1);
                search.started = true;
                search.submitted = false;
            }    
        };
        
        $scope.splitArray = function(step) {
            var i, j;
            search.rows = [];
            for (i = 0, j = search.products.length; i < j; i += step) {
                 search.rows.push(search.products.slice(i, i + step));
            }
        };
        
        search.fetchOnePage = function(number, direction) {
            if ((direction === 'prev' && angular.element("#prev").hasClass("disabled")) || (direction === 'next' && angular.element("#next").hasClass("disabled"))) {
                return;
            }
            search.products = [];
            $scope.failed = false;        
            $scope.isFetching = true;
            $.ajax({
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags=" + search.keywords + "&page=" + number,
                dataType: "jsonp",
                jsonpCallback: 'jsonFlickrFeed',            
                success: function(feeds){
                    $scope.$apply(function(){
                        console.log(feeds);
                        angular.forEach(feeds.photos.photo, function(value, key) {
                            search.products.push( {
                                title: value.title,
                                img: value.url_q,
                                flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id,
                            } );

                        });
                        
                        $scope.splitArray(4);
    
                        search.currentPage = number;
                        search.pageCount = feeds.photos.pages;
                        $scope.isFetching = false;
                        $scope.failed = false;
                    });
                },
                error: function(error){
                    $scope.$apply(function(){
                        $scope.failed = true;                                   
                        $scope.isFetching = false;    
                    });
                }
            });
        };
        
        $scope.range = function(n) {
            var rangeSize = 10;
            var ret = [];
            var start, i;
            
            if (search.pageCount < rangeSize) {
                rangeSize = search.pageCount;
            }
            start = search.currentPage;
            if (start > search.pageCount - rangeSize) {
              start = search.pageCount-rangeSize + 1;
            }

            for (i = start; i < start + rangeSize; i++) {
              ret.push(i);
            }
            
            return ret;
        };


        $scope.prevPageDisabled = function() {
            return search.currentPage === 1 ? true : false;
        };

        $scope.nextPageDisabled = function() {
            return search.currentPage === search.pageCount ? true : false;
        };

	}]);

})();