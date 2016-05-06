import $ from "./../vendor/jquery/dist/jquery";
import {sum, square, MyClass} from "./import";
import "./../vendor/mmenu.min";

$(document).ready(init);

function init(){
	runImportedFunctions();
}

function runImportedFunctions(){
	
	const nav = $(".js-primary-nav");

	nav.mmenu({
		offCanvas: {
			position: "left",
			zposition: "front"
		}
	});

	nav.find('.mm-navbar').append('<button class="primary-nav__mobile-btn-close js-primary-nav-btn-close">x</button>');

	const navBtn = $(".header__nav--menu");
	navBtn.on('click', function(){
		nav.data('mmenu').open();
	});

	const navBtnBlose = $(".js-primary-nav-btn-close");
	navBtnBlose.on('click', function(){
		nav.data('mmenu').close();
	});

	$(".links-toggle").on("click",function() {
		$(".footer__links").toggleClass("isHidden");
	});

	$(".portlet-faq").on("click", function(e) {
		$(".portlet-faq").removeClass("isActive");
		$(e.target).closest(".portlet-faq").addClass("isActive");
	});
}
