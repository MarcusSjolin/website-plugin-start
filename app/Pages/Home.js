var React = require("react")

module.exports = function (app) {
    return React.createClass({
        render: function() {
            return (
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Welcome</h3>
                        </div>
                        <div className="panel-body">
                            <p>
                                This is the initial webpage to jest show that you have a running instance of Website-Core. This module is named website-plugin-start and is available in github.com under MIT licence.
                            </p>
                            <p>
                                If you want to get started you can build plugins as you please and have them owwn certain namespaces.
                            </p>
                            <p>
                                In the future you will be able to administer your plugins in <a href="/admin">The Admin Page</a> and be able to update plugins etc straight away from there.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    })
};
