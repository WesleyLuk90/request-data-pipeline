const React = require('react');

const ContentContainer = require('../containers/ContentContainer');
const FieldList = require('../forms/FieldList');
const TextInput = require('../forms/TextInput');
const Module = require('../../Module');

class CreateDataSource extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.module.get('createDataSourceStore');

        this.state = {
            dataSource: this.store.getDataSource(),
        };
    }

    componentDidMount() {
        this.subscriptions = [
            this.store.getStream().subscribe(d => this.setDataSource(d)),
        ];
    }

    componentWillUnmount() {
        this.subscriptions.forEach(s => s.dispose());
    }

    setDataSource(dataSource) {
        this.setState({ dataSource });
        this.forceUpdate();
    }

    createOnChange(property) {
        return (e) => {
            this.state.dataSource[property] = e.target.value;
            this.store.update(this.state.dataSource);
        };
    }


    render() {
        return (<ContentContainer>
            <FieldList>
                <TextInput label="URL" onChange={this.createOnChange('url')} value={this.state.dataSource.url} />
            </FieldList>
        </ContentContainer>);
    }
}

CreateDataSource.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = CreateDataSource;
