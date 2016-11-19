const React = require('react');

const Module = require('../Module');
const ContentContainer = require('./containers/ContentContainer');
const Icon = require('../elements/Icon');
const Button = require('../elements/Button');

class DataSources extends React.Component {
    render() {
        return (<ContentContainer>
            <Button type="create">
                <Icon icon="plus" /> New Data Source
            </Button>
        </ContentContainer>);
    }
}

DataSources.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSources;
