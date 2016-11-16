const React = require('react');

const Module = require('../Module');

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: null,
        };

        this.router = props.module.get('router');
    }

    componentDidMount() {
        this.subscriptions = [
            this.router.getRouteStream().subscribe(route => this.setRoute(route)),
        ];
    }

    componentWillUnmount() {
        this.subscriptions.forEach(s => s.dispose());
    }

    setRoute(route) {
        if (!route) {
            return;
        }
        this.setState({ view: route.view });
    }

    render() {
        return (<div className="content">
            {this.state.view}
        </div>);
    }
}

Content.propTypes = {
    module: React.PropTypes.instanceOf(Module).isRequired,
};

module.exports = Content;
