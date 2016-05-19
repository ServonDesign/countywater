import $ from "./../vendor/jquery/dist/jquery";
import slick from "./../vendor/slick/rdslick.js";

const slider = () => {
	
	$(".hero-slider").slick({
		dots: true, infinite: true, speed: 300, slidesToShow: 1, centerMode: false
	});

};


export { slider };
