'use strict';


(function() {
	var app = angular.module('flickr-search', [ ]);
    angular.module('myModule', ['ui.bootstrap']);
//	var picturesOld = [
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//        {
//            title: 'Photo Walk Blue Hour at the Trump Tower',
//            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
//            flickr: 'https://flic.kr/p/bp6BcX',
//        },
//    ];

    app.filter('offset', function() {
        return function(input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
      };
    });    
        
	app.controller('SearchController', ['$scope', function($scope){
        var search = this;
        
        search.keywords = "";
        search.submitted = false;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&text=flowers&media=photos&extras=url_q&per_page=12&page=1&format=json&jsoncallback=JSON_CALLBACK";
		//this.products = pictures;
        
        //var script = document.createElement('script');
        //script.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&text=flowers&media=photos&extras=url_q&per_page=12&page=1&format=json&jsoncallback=showThirdPartyData";
        //script.src = $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&text=flowers&media=photos&extras=url_q&per_page=12&page=1&format=json&api_sig=658b06a35cefc54032f200b0da52acde&jsoncallback=?", showThirdPartyData);
//        $http.get(url)
//            .success(
//                function(data){
//                    //store.products = data;
//                    console.log(data.photos);
//        });

    //document.body.appendChild(script)
//        $scope.failed = false;        
//        $scope.isFetching = true;
//            $.ajax({
//                //url: "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + "flowers, red",
//                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&text=flowers&media=photos&extras=url_q&per_page=12&page=1&format=json&jsoncallback=jsonFlickrFeed",
//                dataType: "jsonp",
//                jsonpCallback: 'jsonFlickrFeed',            
//                success: function(feeds){
//                    $scope.$apply(function(){
//                        //this.feeds = feeds;
//                        console.log(feeds);
//                        angular.forEach(feeds.photos.photo, function(value, key) {
//                            search.products.push( {
//                                title: value.title,
//                                //img: value.media.m.replace("_m.", "_q_d."),
//                                img: value.url_q,
//                                //flickr: value.link,
//                                flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id,
//                            } );
//
//                        });
//                        
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
        
//        $scope.rows = [];
//        var maxRows = 3;
//        var maxCols = 4;
//        for( var i = 0 ; i < maxRows; i++){
//          $scope.rows.push([]);
//          for( var j = 0 ; j < maxCols; j++){
//              $scope.rows[i][j] = "Item in " + i + "," + j;
//          }
//        }
        
        this.itemsPerPage = 12;
        //search.currentPage = 0;

        this.newSearch = function(pageNumber) {
            search.products = [];
            search.started = true;
            search.submitted = true;
            if (search.keywords) {
                //alert(search.keywords);
                
                if (pageNumber === undefined) {
                    pageNumber = 1;
                }
                search.fetchOnePage(1);
//                $scope.failed = false;        
//                $scope.isFetching = true;
//                $.ajax({
//                    //url: "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + "flowers, red",
//                    url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags=" + search.keywords + "&page=" + pageNumber,
//                    dataType: "jsonp",
//                    jsonpCallback: 'jsonFlickrFeed',            
//                    success: function(feeds){
//                        $scope.$apply(function(){
//                            //this.feeds = feeds;
//                            console.log(feeds);
//                            angular.forEach(feeds.photos.photo, function(value, key) {
//                                search.products.push( {
//                                    title: value.title,
//                                    //img: value.media.m.replace("_m.", "_q_d."),
//                                    img: value.url_q,
//                                    //flickr: value.link,
//                                    flickr: "http://www.flickr.com/photos/" + value.owner + "/" + value.id,
//                                } );
//
//                            });
//                            search.currentPage = pageNumber;
//                            search.pageCount = feeds.photos.pages;
//                            $scope.isFetching = false;
//                            $scope.failed = false;
//                        });
//                    },
//                    error: function(error){
//                        $scope.$apply(function(){
//                            $scope.failed = true;                                   
//                            $scope.isFetching = false;    
//                        });
//                    }
//                });
                
                search.submitted = false;
            }
            
        };
        
        $scope.splitArray = function(n) {
            var i, j, chunk = n;
            search.rows = [];
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            var arr2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]];
            for (i = 0, j = search.products.length; i < j; i+=chunk) {
                
                 search.rows.push(search.products.slice(i, i + chunk));
            }
            
            console.log(search.rows);

            
        };
        
        search.fetchOnePage = function(number, direction) {
            if ((direction === 'prev' && angular.element("#prev").hasClass("disabled")) || (direction === 'next' && angular.element("#next").hasClass("disabled"))) {
                return;
            }
            search.products = [];
            $scope.failed = false;        
            $scope.isFetching = true;
            $.ajax({
                //url: "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + "flowers, red",
                url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags=" + search.keywords + "&page=" + number,
                dataType: "jsonp",
                jsonpCallback: 'jsonFlickrFeed',            
                success: function(feeds){
                    $scope.$apply(function(){
                        //this.feeds = feeds;
                        console.log(feeds);
                        angular.forEach(feeds.photos.photo, function(value, key) {
                            search.products.push( {
                                title: value.title,
                                //img: value.media.m.replace("_m.", "_q_d."),
                                img: value.url_q,
                                //flickr: value.link,
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
            var start;
            
            if (search.pageCount < rangeSize) {
                rangeSize = search.pageCount;
            }
            start = search.currentPage;
            if ( start > search.pageCount-rangeSize ) {
              start = search.pageCount-rangeSize+1;
            }

            for (var i=start; i<start+rangeSize; i++) {
              ret.push(i);
            }
            
            return ret;
        };




        $scope.prevPageDisabled = function() {
            return search.currentPage === 1 ? true : false;
        };

//        this.pageCount = function() {
//            return Math.ceil(this.products.length/this.itemsPerPage)-1;
//        };



        $scope.nextPageDisabled = function() {
            return search.currentPage === search.pageCount ? true : false;
        };

//        $scope.setPage = function(n) {
//            search.currentPage = n;
//        };

	}]);

	
        
})();