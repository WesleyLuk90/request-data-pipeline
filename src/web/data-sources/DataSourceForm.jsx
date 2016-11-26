const React = require('react');
const FieldList = require('../components/forms/FieldList');
const TextInput = require('../components/forms/TextInput');
const RestDataSource = require('../../shared/RestDataSource');

class DataSourceForm extends React.Component {

    createOnChange(property) {
        return (e) => {
            this.props.dataSource[property] = e.target.value;
            if (this.props.onChange) {
                this.props.onChange();
            }
        };
    }

    render() {
        return (<div>
            <FieldList>
                <TextInput label="Name" onChange={this.createOnChange('name')} value={this.props.dataSource.name} />
                <TextInput label="URL" onChange={this.createOnChange('url')} value={this.props.dataSource.url} />
            </FieldList>
        </div>);
    }
}

DataSourceForm.propTypes = {
    dataSource: React.PropTypes.instanceOf(RestDataSource).isRequired,
    onChange: React.PropTypes.func,
};

module.exports = DataSourceForm;
