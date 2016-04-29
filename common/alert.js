var PageAlert = React.createClass({
    render: function() {
        return (
            <div className="alert--container">
              <div className="alert__announcement">
                <h4 className="alert__announcement--message">Latest announcements: <span>Heyfor Road - No water & low pressure</span></h4>
              </div>
            </div>
        );
    }
});

var renderedToStaticMarkup = React.renderToStaticMarkup(<PageAlert/>);
document.getElementById('page-alert').innerHTML = renderedToStaticMarkup;
