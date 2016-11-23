const React = require('react');
const { shallow } = require('enzyme');

const ActionContainer = require('../../../../src/web/components/forms/ActionContainer');

describe('ActionContainer', () => {
    it('should display', () => {
        const component = shallow(<ActionContainer />);
        expect(component).toBeDefined();
    });
});
