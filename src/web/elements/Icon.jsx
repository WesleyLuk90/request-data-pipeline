const React = require('react');

class Icon extends React.Component {
    getClassName() {
        return `fa fa-${this.props.icon}`;
    }

    render() {
        return (<span className={this.getClassName()}/>);
    }
}

module.exports = Icon;
