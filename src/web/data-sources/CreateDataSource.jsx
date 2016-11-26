const React = require('react');

const ContentContainer = require('../components/containers/ContentContainer');
const FieldList = require('../components/forms/FieldList');
const Button = require('../elements/Button');
const Module = require('../Module');
const ActionContainer = require('../components/forms/ActionContainer');
const DataSourceForm = require('./DataSourceForm');

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

    onChange() {
        this.store.update(this.state.dataSource);
    }

    setDataSource(dataSource) {
        this.setState({ dataSource });
    }

    render() {
        return (<ContentContainer>
            <DataSourceForm dataSource={this.state.dataSource} onChange={() => this.onChange()} />
            <FieldList>
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
