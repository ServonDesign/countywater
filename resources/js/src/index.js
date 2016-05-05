import $ from "./../vendor/jquery/dist/jquery";
import {sum, square, MyClass} from "./import";

$(document).ready(init);

function init(){
	runImportedFunctions();
}

function runImportedFunctions(){
	// 25
	console.log(square(5));

	var cred = {
		name: "Ritesh Kumar",
		enrollmentNo: 11115078
	};

	var x = new MyClass(cred);

	//Ritesh Kumar
	console.log(x.getName());

	console.log(sum(4,5));

	console.log($([]));

	console.log($.fn);

	console.log("test");

	$(".links-toggle").on("click",function() {
		$(".footer__links").toggleClass("isHidden");
	});

	$(".portlet-faq").on("click", function(e) {
		$(".portlet-faq").removeClass("isActive");
		$(e.target).closest(".portlet-faq").addClass("isActive");
	});
}
