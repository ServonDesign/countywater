import $ from "./../vendor/jquery/dist/jquery";
import {sum, square, MyClass} from "./import";
import "./../vendor/mmenu.min";
import slick from "./../vendor/slick/rdslick.js";
import {navigation} from "./navigation";
import {slider} from "./slider";
import {footerLinkToggle} from "./footer";

$(document).ready(init);

function init(){
	$.fn.slick = slick;
	runImportedFunctions();
}

function runImportedFunctions(){
	
	navigation();
	slider();
	footerLinkToggle();

	$(".portlet-faq").on("click", function(e) {
		$(".portlet-faq").removeClass("isActive");
		$(e.target).closest(".portlet-faq").addClass("isActive");
	});

	$(".about-us, .bill, .account").find('.page-sidebar ul li').each(function() {
		$(this).addClass('about-us-portlet');
	});

	// $(".bill").find('.page-sidebar ul li').each(function() {
	// 	$(this).addClass('about-us-portlet');
	// });

	// $(".account").find('.page-sidebar ul li').each(function() {
	// 	$(this).addClass('about-us-portlet');
	// });


	$( ".about-us-portlet" ).prepend( '<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrows-bold-right"></use></svg>' );

}
