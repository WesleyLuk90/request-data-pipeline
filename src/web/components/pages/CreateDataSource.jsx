const React = require('react');

const ContentContainer = require('../containers/ContentContainer');
const FieldList = require('../forms/FieldList');
const TextInput = require('../forms/TextInput');
const Button = require('../../elements/Button');
const Module = require('../../Module');
const ActionContainer = require('../forms/ActionContainer');

class CreateDataSource extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.module.get('createDataSourceStore');
        this.createService = this.props.module.get('createDataSourceService');

        this.state = {
            dataSource: this.store.get(),
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

    onClickCreate() {
        this.createService.create();
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
                <TextInput label="Name" onChange={this.createOnChange('name')} value={this.state.dataSource.name} />
                <TextInput label="URL" onChange={this.createOnChange('url')} value={this.state.dataSource.url} />
                <ActionContainer>
                    <Button type="create" onClick={e => this.onClickCreate(e)}>Create</Button>
                </ActionContainer>
            </FieldList>
        </ContentContainer>);
    }
}

CreateDataSource.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = CreateDataSource;
