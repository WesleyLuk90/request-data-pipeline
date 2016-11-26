const React = require('react');

const Module = require('../Module');

const DataSourceForm = require('./DataSourceForm');
const FieldList = require('../components/forms/FieldList');
const Button = require('../elements/Button');
const ActionContainer = require('../components/forms/ActionContainer');
const ContentContainer = require('../components/containers/ContentContainer');

class DataSourcesEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.module.get('editDataSourceStore');
        this.service = props.module.get('editDataSourceService');
        this.router = props.module.get('router');

        this.state = {
            dataSource: this.store.get(),
        };
    }

    componentDidMount() {
        this.service.load(this.router.getParameter('id'));
        this.subscriptions = [
            this.store.getStream().subscribe(dataSource => this.updateDataSource(dataSource)),
        ];
    }

    componentWillUnmount() {
        this.subscriptions.forEach(s => s.dispose());
        this.subscriptions = [];
    }

    onChange() {
        this.store.update(this.state.dataSource);
    }

    onClickSave(e) {
        e.preventDefault();
        this.service.update();
    }

    updateDataSource(dataSource) {
        this.setState({ dataSource });
    }

    render() {
        return (<ContentContainer>
            <DataSourceForm dataSource={this.state.dataSource} onChange={() => this.onChange()} />
            <FieldList>
                <ActionContainer>
                    <Button type="save" onClick={e => this.onClickSave(e)}>Save</Button>
                </ActionContainer>
            </FieldList>
        </ContentContainer>);
    }
}

DataSourcesEditPage.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSourcesEditPage;
