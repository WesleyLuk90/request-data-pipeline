const React = require('react');

class FieldList extends React.Component {
    render() {
        return (<div className="field-list">
            {this.props.children}
        </div>);
    }
}

FieldList.propTypes = {
    children: React.PropTypes.node,
};

module.exports = FieldList;
