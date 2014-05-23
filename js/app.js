'use strict';


(function() {
	var app = angular.module('flickr-search', []);
	var pictures = [
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
        
	app.controller('SearchController', function(){
		this.products = pictures;
        this.itemsPerPage = 12;
        this.currentPage = 0;

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

        this.pageCount = function() {
            return Math.ceil(this.products.length/this.itemsPerPage)-1;
        };

        this.nextPage = function() {
            if (this.currentPage < this.pageCount()) {
                this.currentPage++;
            }
        };

        this.nextPageDisabled = function() {
            return this.currentPage === this.pageCount() ? "disabled" : "";
        };

        this.setPage = function(n) {
            this.currentPage = n;
        };

	});

	
        
})();