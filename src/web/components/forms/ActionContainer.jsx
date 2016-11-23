const React = require('react');

class ActionContainer extends React.Component {
    render() {
        return (<div className="action-container row">
            <div className="col-xs-8 col-xs-offset-4">
                {this.props.children}
            </div>
        </div>);
    }
}
ActionContainer.propTypes = {
    children: React.PropTypes.node,
};

module.exports = ActionContainer;
