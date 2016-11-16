const React = require('react');

const Module = require('../Module');

class DataSources extends React.Component {
    render() {
        return (<div>Hello</div>);
    }
}

DataSources.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = DataSources;
