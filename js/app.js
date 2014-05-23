'use strict';


(function(){
	var app = angular.module('flickr-search', [ ]);
	
	app.controller('SearchController', function(){
		this.product = pic1;
	});

	var pic1= {
		title: 'Photo Walk Blue Hour at the Trump Tower',
		img: 'http://totallyfrickinawesome.com/wp-content/uploads/2014/03/a94f9ddbaa4ec8ea829dc4a6ddac7b73-150x150.jpg',
		flickr: 'https://flic.kr/p/bp6BcX',
	}
})();