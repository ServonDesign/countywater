import $ from "./../vendor/jquery/dist/jquery";

const navigation = () => {

	let nav = $(".js-primary-nav");

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
};


export { navigation };
