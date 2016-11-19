const React = require('react');
const _ = require('lodash');

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: _.uniqueId(),
        };
    }
    render() {
        return (<div className="form-group">
            <label htmlFor={this.state.id} className="control-label col-xs-4">
                {this.props.label}
            </label>
            <div className="col-xs-8">
                <input
                    className="form-control"
                    id={this.state.id}
                    name={this.state.id}
                    placeholder={this.props.placeholder || this.props.label}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        </div>);
    }
}
TextInput.propTypes = {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
};

module.exports = TextInput;
