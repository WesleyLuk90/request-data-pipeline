const React = require('react');

const Module = require('../Module');
const ContentContainer = require('./containers/ContentContainer');
const Icon = require('../elements/Icon');
const Button = require('../elements/Button');

class DataSources extends React.Component {
    constructor(props) {
        super(props);
        this.router = this.props.module.get('router');
    }
    goToCreate() {
        this.router.go('data-sources.create');
    }
    render() {
        return (<ContentContainer>
            <Button type="create" onClick={() => this.goToCreate()}>
                <Icon icon="plus" /> New Data Source
            </Button>
        </ContentContainer>);
    }
}

DataSources.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSources;
