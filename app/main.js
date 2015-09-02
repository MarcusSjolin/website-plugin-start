var React = require("react/addons")
var Router = require("react-router")
var $ = require('jquery')

var {Route, RouteHandler, DefaultRoute, NotFoundRoute} = Router;

var app = {
    name: "website-plugin-start",
    translations:{},
    locale: 'sv_SE',
    translate: function(keyword) {
        try {
            return this.translations[this.locale][keyword] || keyword
        } catch (e) {
            return keyword
        }
    }
}
$.ajax({
    url: '/api/translations'
}).done(function(data) {
    app.translations = data

    var Header = require('./Partials/Header')(app);
    var MainRoute = React.createClass({
        render () {
            return (
                <div>
                    <Header/>
                    <RouteHandler/>
                </div>
            )
        }
    });

    var Home = require('./Pages/Home')(app);
    var Project = require('./Pages/Project')(app);

    var routes = (
        <Route handler={MainRoute} path="/">
            <Route name="Home" path="/" handler={Home} />
            <Route name="Project" path="/project" handler={Project} />
            <DefaultRoute handler={Home} />
        </Route>
    );

    Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.getElementById('main-container'));
    });
})


