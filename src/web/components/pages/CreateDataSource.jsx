const React = require('react');

const ContentContainer = require('../containers/ContentContainer');
const FieldList = require('../forms/FieldList');
const TextInput = require('../forms/TextInput');

class CreateDataSource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'test',
        };
    }
    createOnChange(type) {
        return (e) => {
            this.setState({ value: e.target.value });
        };
    }
    render() {
        return (<ContentContainer>
            <FieldList>
                <TextInput label="URL" onChange={this.createOnChange('url')} value={this.state.value} />
            </FieldList>
        </ContentContainer>);
    }
}

module.exports = CreateDataSource;
