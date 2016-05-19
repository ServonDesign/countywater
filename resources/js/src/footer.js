import $ from "./../vendor/jquery/dist/jquery";

const footerLinkToggle = () => {

	let linkToggle = $(".links-toggle"),
		footerLinks = $(".footer__links");
	
	linkToggle.on("click",function() {

		footerLinks.toggleClass("isHidden");

		if ( footerLinks.hasClass("isHidden") ) {
			linkToggle.find('use').attr('xlink:href','#arrows-bold-right');
		} else {
			linkToggle.find('use').attr('xlink:href','#arrows-bold-down');
		}
		
	});
		
};


export { footerLinkToggle };