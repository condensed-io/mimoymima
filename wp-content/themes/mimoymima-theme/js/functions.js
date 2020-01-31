// mYm Functions v 2 - brent@mimoymima.com
// last edited: Nov 10, 2013


// fix for ipad resizing content on orientation change -- updated version of jeremy keith's fix
// useful for making responsive sites, if your site isn't responsive you can remove this bit of code
(function(doc) {

	var addEvent = 'addEventListener',
	type = 'gesturestart',
	qsa = 'querySelectorAll',
	scales = [1, 1],
	meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [0.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// DOCUMENT READY FUNCTION: uses noConflict to work with other libraries
jQuery(document).ready(function($) {


//-----Select Linker -- To use, add the class link-select to your select element -- by mimoYmima.com
	$('.link-select').change(function(){ 
		var LinkTo = $('.link-select').val();
		top.location.href = LinkTo;
	});


/* ::: SHOW AND HIDE ::::::::::::::::::::::::::::::::: */

	$(".toggle")
		.addClass('make-link') // make headings look like links
		.addClass('header-hidden')
		.click(function(){
			var $this = $(this);
			if( $this.is('.header-shown') ) {
				$this.next().slideToggle('normal');
				$this.removeClass('header-shown');
				$this.addClass('header-hidden');
			} else {
				$this.next().slideToggle('normal');
				$this.removeClass('header-hidden');
				$this.addClass('header-shown');
			}
		return false;
	});

/* ::: SCROLL TO ELEMENTS ::::::::::::::::::::::::::::::::: */

// L I N K //  http://andrewhenderson.me/tutorial/jquery-sticky-sidebar/
	
	// selector for the links you want to activate, adding class of jumplink but you can add more by comma separating them
	// the links need to have a hash that leads to an element on the page with the same ID (which is how you probably makred it up right)
	$('.jumplink').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,40);
		return false;
		
	});
		
	function scrollToDiv(element,navheight){
		
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
		scrollTop: totalScroll
		}, 500);
	}


/* ::: TOGGLE NAV ::::::::::::::::::::::::::::::::: */

	$('.topnav-container').fadeIn('slow'); // if js is available we show the nav (it's hidden with CSS by default)
	$('.toggle-nav').css('cursor','pointer');
	$('.toggle-nav').click(function() {
		var $menu = $("#menu-mainnav");
		$menu.toggleClass("visible-nav");
		$('.toggle-nav').toggleClass("toggled");
	});
	
	$(document).click(function() {
		var target = $(event.target);
		if (!$(target).is('.toggle-nav')) {
			var $menu = $("#menu-mainnav");
			$menu.removeClass("visible-nav");
			$('.toggle-nav').removeClass("toggled");
		}
	});


/* ::: MOVE LABELS INTO INPUTS IN FORMS ::::::::::::::::::::::::::::::::: */
	
	// // Detect support for placeholder attribute
	// var placeholderSupport = ("placeholder" in document.createElement("input"));

	// // if it's supported move the labels into the form fields
	// if(placeholderSupport){
				
	// 	$('label').not('.gfield_checkbox label').each(function(){

	// 		var label = $(this);
	// 		label.hide();

	// 		var field = label.parent().find('input, textarea');
	// 		var labelText = label.text();

	// 		field.attr('placeholder', labelText);

	// 	});
	// } // end browser check



/* ::: POPUP LINKS ::::::::::::::::::::::::::::::::: */
	$('.popup').attr('target', '_blank');



	
});//<--- this is the end of the document ready function don't delete it

