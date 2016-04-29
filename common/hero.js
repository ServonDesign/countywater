var PageHero = React.createClass({
    render: function() {
        return (
            <div className="hero--container">
              <div className="hero__content">
                <div className="hero__image">
                  <img src="./resources/imgs/hero-placeholder.png" alt="placeholder"/>
                </div>
              </div>
            </div>
        );
    }
});

var renderedToStaticMarkup = React.renderToStaticMarkup(<PageHero/>);
document.getElementById('page-hero').innerHTML = renderedToStaticMarkup;
