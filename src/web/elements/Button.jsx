const React = require('react');
const classnames = require('classnames');

class Button extends React.Component {
    getTypeClass() {
        switch (this.props.type) {
            case 'create':
                return 'btn-success';
            default:
                return 'btn-default';
        }
    }
    getClasses() {
        return classnames('btn', this.getTypeClass());
    }

    render() {
        return (<button className={this.getClasses()}>{this.props.children}</button>);
    }
}

Button.propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
};

module.exports = Button;
