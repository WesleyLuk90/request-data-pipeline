const React = require('react');

const Navigation = require('./Navigation');
const Content = require('./Content');

class Page extends React.Component {
    render() {
        return (<div className="page">
            <Navigation module={this.props.module} />
            <Content />
        </div>);
    }
}

Page.propTypes = {
    module: React.PropTypes.object.isRequired,
};

module.exports = Page;
