'use strict';


(function() {
	var app = angular.module('flickr-search', [ ]);
	var picturesOld = [
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
        {
            title: 'Photo Walk Blue Hour at the Trump Tower',
            img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
            flickr: 'https://flic.kr/p/bp6BcX',
        },
    ];

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
        search.products = [];
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
    
        this.itemsPerPage = 12;
        search.currentPage = 0;

        this.newSearch = function(pageNumber) {
            search.submitted = true;
            if (search.keywords) {
                //alert(search.keywords);
                search.products = [];
                if (pageNumber === undefined) {
                    pageNumber = 1;
                }
                $scope.failed = false;        
                $scope.isFetching = true;
                $.ajax({
                    //url: "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + "flowers, red",
                    url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=84c81a688848153a0fa4db04702b63fd&media=photos&extras=url_q&sort=relevance&per_page=12&format=json&jsoncallback=jsonFlickrFeed&tags=" + search.keywords + "&page=" + pageNumber,
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
                            search.currentPage = pageNumber;
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
                search.submitted = false;
            }
            
        };
        
        this.range = function() {
            var rangeSize = 5;
            var ret = [];
            var start;

            start = this.currentPage;
            if ( start > this.pageCount()-rangeSize ) {
              start = this.pageCount()-rangeSize+1;
            }

            for (var i=start; i<start+rangeSize; i++) {
              ret.push(i);
            }
            return ret;
        };


        this.prevPage = function() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        };

        this.prevPageDisabled = function() {
            return this.currentPage === 0 ? "disabled" : "";
        };

//        this.pageCount = function() {
//            return Math.ceil(this.products.length/this.itemsPerPage)-1;
//        };

        this.nextPage = function() {
            if (this.currentPage < this.pageCount()) {
                this.currentPage++;
            }
        };

        this.nextPageDisabled = function() {
            return search.currentPage === search.pageCount ? "disabled" : "";
        };

        this.setPage = function(n) {
            this.currentPage = n;
        };

	}]);

	
        
})();