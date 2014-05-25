'use strict';


(function() {
    var app = angular.module('flickr-search', ['ui.bootstrap']);
    
    app.controller('SearchController', function($scope){
        var search = this;
        
        search.prevDisabled = false;
        search.nextDisabled = false;
        search.showMessage = false;
        search.emptySubmitted = false;
        
//        $scope.$watch('currentPage',function() {
//            if ($scope.currentPage === 1) {
//                search.prevDisabled = true;
//                return;
//            } else if ($scope.currentPage === search.pageCount) {
//                search.nextDisabled = true;
//                return;
//            };
//            $scope.fetchOnePage($scope.currentPage);
//        });

        search.newSearch = function() {  
            $scope.submitted = true;
            if (search.keywords === undefined) {
                search.emptySubmitted = true;
            } else {
                search.emptySubmitted = false;
                $scope.currentPage = 1;
                $scope.fetchOnePage($scope.currentPage);
            };
            $scope.submitted = false;
        };
        
        $scope.splitArray = function(step) {
            var i, j;
            search.rows = [];
            for (i = 0, j = search.products.length; i < j; i += step) {
                 search.rows.push(search.products.slice(i, i + step));
            }
        };
        
        $scope.fetchOnePage = function(pageNumber) {
            search.products = [];
            $scope.failed = false;        
            $.ajax({
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d70b688ec8e8dccee57c3fc1232c72b4&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags="                    + search.keywords + "&page=" + pageNumber,
                dataType: "jsonp",
                jsonpCallback: 'jsonFlickrFeed',            
                success: function(results){
                    
                    if (results.photos.photo.length === 0) {
                        search.showNav = false;
                        $scope.searchForm.$setPristine();
                        
                        search.message = "По запросу «" + search.keywords + "» ничего не найдено.";
                        search.showMessage = true;
                        return;
                        
                    }
                    $scope.$apply(function(){
                        console.log(results);
                        angular.forEach(results.photos.photo, function(value, key) {
                            search.products.push( {
                                title: value.title,
                                img: value.url_q,
                                flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id,
                            });
                        });

                        $scope.splitArray(4);
                        search.pageCount = results.photos.pages;
                        search.showNav = true;
                        $scope.fillNav($scope.currentPage, search.pageCount);
                        $scope.failed = false;
                    });
                },
                error: function(error){
                    $scope.$apply(function(){
                        $scope.failed = true;                                       
                    });
                }
            });
        };
$scope.$watch('currentPage', function (page) {
    
    $scope.setPage(page);
  });        
$scope.fillNav = function(currentPage, totalItems) {

  $scope.totalItems = totalItems;
//  $scope.currentPage = currentPage;

  $scope.setPage = function (pageNo) {
//      alert($scope.currentPage + "setting page");
    $scope.currentPage = pageNo;
      $scope.fetchOnePage(pageNo);
    
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
      
  };

  $scope.maxSize = 9;
};

        
        
                $scope.range = function () {
                    var display, delta, start, end;
                    display = 9;
                    delta = Math.floor(display / 2);
                    start = $scope.currentPage - delta;
                    if (start < 1) {
                        start = 1;
                    }
                    end = start + display - 1;
                    if (end > search.pageCount) {
                        end = search.pageCount;
                        start = end - (display - 1);
                        if (start < 1) {
                            start = 1;
                        }
                    }

                    $scope.pages = [];
                    for (var i = start; i <= end; ++i) {
                        $scope.pages.push(i);
                    }
                    console.log($scope.pages);
                    return $scope.pages;
                };        
//        $scope.range = function() {
//            var rangeSize = 9;
//            var ret = [];
//            var start, i;
//            
//            if (search.pageCount < rangeSize) {
//                rangeSize = search.pageCount;
//            }
//            
////            start = $scope.currentPage;
////            if (start > search.pageCount - rangeSize) {
////              start = search.pageCount-rangeSize + 1;
////            }
////
////            for (i = start; i < start + rangeSize; i++) {
////              ret.push(i);
////            }
////            
////            return ret;
//        };
//
//
//        $scope.prevPageDisabled = function() {
//            return $scope.currentPage === 1 ? true : false;
//        };
//
//        $scope.nextPageDisabled = function() {
//            return $scope.currentPage === search.pageCount ? true : false;
//        };

    });
    
    
//	var app = angular.module('flickr-search', [ ]);
//        
//	app.controller('SearchController', ['$scope', function($scope){
//        var search = this;
//        search.keywords = "";
//        search.submitted = false;
//        //$scope.currentPage = 0;
//        $scope.$watch('currentPage',function() {
//            $scope.fetchOnePage($scope.currentPage);
//        });
//        this.newSearch = function() {           
//            search.submitted = true;
//            search.message = "Пожалуйста, введите поисковой запрос.";
//            if (search.keywords) {
//                $scope.fetchOnePage(1);
//                //console.log(search.products);
//                //search.showNav = true;
//                search.submitted = false;
//            }    
//        };
//        
//        $scope.splitArray = function(step) {
//            var i, j;
//            search.rows = [];
//            for (i = 0, j = search.products.length; i < j; i += step) {
//                 search.rows.push(search.products.slice(i, i + step));
//            }
//        };
//        
//        $scope.fetchOnePage = function(number, direction) {
//            if ((direction === 'prev' && angular.element("#prev").hasClass("disabled")) || (direction === 'next' && angular.element("#next").hasClass("disabled"))) {
//                return;
//            }
//            search.products = [];
//            $scope.failed = false;        
//            $scope.isFetching = true;
//            $.ajax({
//                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d70b688ec8e8dccee57c3fc1232c72b4&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags=" + search.keywords + "&page=" + number,
//                dataType: "jsonp",
//                jsonpCallback: 'jsonFlickrFeed',            
//                success: function(feeds){
////                    if (feeds.photos.photo.length === 0) {
////                        search.showNav = false;
////                        search.message = "По вашему запросу ничего не найдено.";
////                    }
//                    $scope.$apply(function(){
//                        console.log(feeds);
//                        angular.forEach(feeds.photos.photo, function(value, key) {
//                            search.products.push( {
//                                title: value.title,
//                                img: value.url_q,
//                                flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id,
//                            } );
//
//                        });
//                        //console.log(feeds.photos.photo.length);
//                        $scope.splitArray(4);
//                        
//                        //search.currentPage = number;
//                        search.pageCount = feeds.photos.pages;
//                        search.showNav = true;
//                        $scope.isFetching = false;
//                        $scope.failed = false;
//                    });
//                },
//                error: function(error){
//                    $scope.$apply(function(){
//                        $scope.failed = true;                                   
//                        $scope.isFetching = false;    
//                    });
//                }
//            });
//        };
//        
//        $scope.range = function(n) {
//            var rangeSize = 10;
//            var ret = [];
//            var start, i;
//            
//            if (search.pageCount < rangeSize) {
//                rangeSize = search.pageCount;
//            }
//            start = $scope.currentPage;
//            if (start > search.pageCount - rangeSize) {
//              start = search.pageCount-rangeSize + 1;
//            }
//
//            for (i = start; i < start + rangeSize; i++) {
//              ret.push(i);
//            }
//            
//            return ret;
//        };
//
//
//        $scope.prevPageDisabled = function() {
//            return $scope.currentPage === 1 ? true : false;
//        };
//
//        $scope.nextPageDisabled = function() {
//            return $scope.currentPage === search.pageCount ? true : false;
//        };
//
//	}]);

    
    
    
})();

//
//alert($('#pagination-demo').attr('ng-model'));
//    $('#pagination-demo').twbsPagination({
//        totalPages: $('#pagination-demo').attr('ng-model'),
//        visiblePages: 9,
//        onPageClick: function (event, page) {
//            $('#page-content').text('Page ' + page);
//        }
//    });