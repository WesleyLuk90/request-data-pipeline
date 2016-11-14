const React = require('react');
const Icon = require('../elements/Icon');

class Navigation extends React.Component {
    onClick(e, route) {
        e.preventDefault();
        this.navigate(route);
    }

    navigate(route) {
        this.props.module.router.go(route);
    }

    render() {
        return (<nav className="navigation">
            <ul className="navigation__links navigation-links">
                <li className="navigation-links__link-container">
                    <a href="" className="navigation-links__link" onClick={e => this.onClick(e, 'data-sources')}>
                        <Icon icon="server" /> Data Sources
                    </a>
                </li>
                <li className="navigation-links__link-container">
                    <a href="" className="navigation-links__link" onClick={e => this.onClick(e, 'transforms')}>
                        <Icon icon="code-fork" /> Transforms
                    </a>
                </li>
                <li className="navigation-links__link-container">
                    <a href="" className="navigation-links__link" onClick={e => this.onClick(e, 'pipelines')}>
                        <Icon icon="exchange" /> Pipelines
                    </a>
                </li>
            </ul>
            <ul className="navigation__right navigation__links">
                <li className="navigation-links__link-container">
                    <a href="" className="navigation-links__link" onClick={e => this.onClick(e, 'settings')}>
                        <Icon icon="cogs" /> Settings
                    </a>
                </li>
            </ul>
        </nav>);
    }
}
Navigation.propTypes = {
    module: React.PropTypes.object.isRequired,
};

module.exports = Navigation;
