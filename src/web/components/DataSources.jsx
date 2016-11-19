const React = require('react');

const Module = require('../Module');
const ContentContainer = require('./containers/ContentContainer');

class DataSources extends React.Component {
    render() {
        return (<ContentContainer>
            Hello
        </ContentContainer>);
    }
}

DataSources.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSources;
