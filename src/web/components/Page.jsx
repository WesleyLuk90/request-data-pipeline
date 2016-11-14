const React = require('react');

const Navigation = require('./Navigation');
const Content = require('./Content');

class Page extends React.Component {
    render() {
        return (<div className="page">
            <Navigation />
            <Content />
        </div>);
    }
}

module.exports = Page;
