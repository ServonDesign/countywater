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
}
