const React = require('react');

const Module = require('../Module');
const DataSourceListItem = require('./DataSourceListItem');

class DataSourceList extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.module.get('dataSourceListStore');
        this.loader = this.props.module.get('dataSourceListLoader');

        this.state = {
            dataSources: this.store.get(),
        };
    }

    componentDidMount() {
        this.loader.load();
        this.subscriptions = [
            this.store.getStream().subscribe(d => this.updateDataSources(d)),
        ];
    }

    componentWillUnmount() {
        this.subscriptions.forEach(s => s.dispose());
        this.subscriptions = [];
    }

    updateDataSources(dataSources) {
        this.setState({ dataSources });
    }

    render() {
        return (<ul className="data-source-list">
            {this.state.dataSources.map((d, i) =>
                <DataSourceListItem module={this.props.module} dataSource={d} key={i} />)}
        </ul>);
    }
}

DataSourceList.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSourceList;
