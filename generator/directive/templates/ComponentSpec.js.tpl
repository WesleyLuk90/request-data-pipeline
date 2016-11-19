const React = require('react');
const { shallow } = require('enzyme');

const <%= component_name %> = require('<%= spec_import_path %>');

describe('<%= component_name %>', () => {
    it('should display', () => {
        const component = shallow(<<%= component_name %> />);
        expect(component).toBeDefined();
    });
});
