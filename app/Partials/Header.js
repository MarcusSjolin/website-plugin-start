var React = require("react/addons")
var Link = require("react-router").Link


module.exports = module.exports = function (app) {
    return React.createClass({
        render: function() {
            return (
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="Home">{app.translate('Home')}</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="menu-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="Project">{app.translate('Project Details')}</Link></li>
                            </ul>

                            <ul className="nav navbar-nav pull-right">
                                <li><a href="/admin">{app.translate('Admin')}</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
    })
};
