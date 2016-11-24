const React = require('react');
const RestDataSource = require('../../shared/RestDataSource');
const Module = require('../Module');

class DataSourceListItem extends React.Component {
    constructor(props) {
        super(props);

        this.router = props.module.get('router');
    }
    onClickEdit(e) {
        e.preventDefault();
        this.router.go('data-sources.edit', { id: this.props.dataSource.id });
    }
    render() {
        return (<li className="data-source-list-item">
            <h1 className="data-source-list-item__name">{this.props.dataSource.name}</h1>
            <p className="data-source-list-item__url">{this.props.dataSource.url}</p>
            <a href="" className="data-source-list-item__edit" onClick={e => this.onClickEdit(e)}>
                Edit
            </a>
        </li>);
    }
}

DataSourceListItem.propTypes = {
    dataSource: React.PropTypes.instanceOf(RestDataSource).isRequired,
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSourceListItem;
