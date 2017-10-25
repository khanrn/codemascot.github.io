(function( $ ){
	'use strict';
	$(function(){
		var current_year = new Date().getFullYear();
        	$('span#age-year').text(current_year-1993);
		$('span#experience-year').text(current_year-2012);
        });

})(jQuery);
