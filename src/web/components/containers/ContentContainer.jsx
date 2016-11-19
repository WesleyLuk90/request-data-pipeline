const React = require('react');

class ContentContainer extends React.Component {
    render() {
        return (<div className="content-container container-fluid">
            {this.props.children}
        </div>);
    }
}

ContentContainer.propTypes = {
    children: React.PropTypes.node,
};

module.exports = ContentContainer;
