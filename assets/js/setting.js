/*==============================================================*/
// Header on scroll shrink
/*==============================================================*/
jQuery(window).on('scroll load', function () {
	if ( jQuery(this).scrollTop() > 0 ) {
		jQuery('.header-wrap').addClass( "shrink-nav" );
	} else {
		jQuery('.header-wrap').removeClass( "shrink-nav" );
	}
});

jQuery(document).ready(function() {
	/*==============================================================*/
	// Tooltip and popover init
	/*==============================================================*/
	jQuery('[data-toggle="tooltip"]').tooltip()
	jQuery('[data-toggle="popover"]').popover()

	/*==============================================================*/
	// data color,bgcolor & border
	/*==============================================================*/
	jQuery("[data-color]").each(function() {
		jQuery(this).css('color', jQuery(this).attr('data-color'));
	});
	jQuery("[data-bgcolor]").each(function() {
		jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
	});
	jQuery("[data-border]").each(function() {
		jQuery(this).css('border', jQuery(this).attr('data-border'));
	});

	/*==============================================================*/
	// Menu mobile toggle
	/*==============================================================*/
	jQuery('.menu-icon > a').on('click',function(){
		jQuery(this).toggleClass('menu-show');
		jQuery('.header-wrap').toggleClass('menu-show');
		jQuery('body').toggleClass('menu-show');
	});

	/*==============================================================*/
	// on clik go to  data id section scroll
	/*==============================================================*/
	jQuery('.goto-section').on('click',function (e) {
		e.preventDefault();
		var target = jQuery(this).data('id');
		jQuery('html, body').stop().animate({
			'scrollTop': jQuery("#"+target).offset().top - 110
		}, 1600, 'swing', function () {
		});
	});

	/*==============================================================*/
	// Image to svg convert
	/*==============================================================*/
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			var $svg = jQuery(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	/*==============================================================*/
	// form-control on click parent class add
	/*==============================================================*/
	jQuery(".form-control").on('focus',function(){
		jQuery(this).parent().addClass("focus");
	})
	jQuery(".form-control").on('focusout',function(){
		jQuery(this).parent().removeClass("focus");
	})
});