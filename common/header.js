var Pageheader = React.createClass({
    render: function() {

      var useMenu = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-bold"></use>';
      var useCall = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phone-call"></use>';

        return (
            <div className="header--container">
              <div className="header__btn--call">
                <a href="#">
                  <svg dangerouslySetInnerHTML={{__html: useCall }} />
                </a>
              </div>
              <div className="header__brand">
                <img src="./resources/imgs/county-water-logo-01.svg" alt="County Water"/>
              </div>
              <div className="header__nav">
                <div className="header__nav--top">
                  <h3 className="contact--nav">Customer Services  01234 567 8901</h3>
                  <div className="top__nav--toggle">
                    <button className="btn btn-toggle btn-toggle-business">Business</button>
                    <button className="btn btn-toggle btn-toggle-consumers">Consumers</button>
                  </div>
                </div>
                <div className="header__nav--main">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Your Account</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                  <div className="header__nav--menu">
                    <a href="#">
                      <svg dangerouslySetInnerHTML={{__html: useMenu }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        );
    }
});

var renderedToStaticMarkup = React.renderToStaticMarkup(<Pageheader/>);
document.getElementById('header').innerHTML = renderedToStaticMarkup;
