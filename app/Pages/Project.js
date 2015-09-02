var React = require("react")

module.exports = function (app) {
    return React.createClass({
        render: function() {
            return (
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Project Overview</h3>
                        </div>
                        <div className="panel-body">
                            <h1>Current</h1>
                            <p>
                                Currently the focus is to create a working workflow for designers and developers to work together to bring out really cool products, that can rapidly be developed and bring in new knowledge and reusable modules into the business area. I will at a start make sure there's a base webpage for when you install the website-core to show how you use it and how you can progess with it. I will also make sure ther's an admin page which can be used to maintain plugins and make sure it can be continiously developed.
                                <ul>
                                    <li>Configurable Webpack per Module</li>
                                    <li>Browser-Sync individual watchers in dev for plugins to reload</li>
                                    <li>Translations</li>
                                    <li>Single Page Examples with React and React-Router</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </p>
                            <h1>Comming up</h1>
                            <p>
                                What's in the near future is:
                                <ul>
                                    <li>Plugin Management</li>
                                    <li>Template Management</li>
                                    <li></li>
                                </ul>
                            </p>
                            <h1>Future</h1>
                            <p>
                                What's in the distant future is:
                                <ul>
                                    <li>E-Commerce</li>
                                    <li>Blog</li>
                                    <li>Images Management / Display</li>
                                    <li></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    })
};
