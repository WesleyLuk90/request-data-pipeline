const React = require('react');
const { shallow } = require('enzyme');

const ContentContainer = require('../../../../src/web/components/containers/ContentContainer');

describe('ContentContainer', () => {
    it('should have the container class', () => {
        const container = shallow(<ContentContainer />);
        expect(container.find('.content-container')).toBePresent();
    });
    it('should have the contents', () => {
        const container = shallow(<ContentContainer>Some content here</ContentContainer>);
        expect(container.text()).toBe('Some content here');
    });
});
