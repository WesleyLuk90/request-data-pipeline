const React = require('react');
const { shallow } = require('enzyme');

const Page = require('../../../src/web/components/Page');
const Navigation = require('../../../src/web/components/Navigation');
const Content = require('../../../src/web/components/Content');

describe('<Page />', () => {
    it('should contain navigation and content', () => {
        const page = shallow(<Page module={{}} />);
        expect(page.find(Navigation)).toBePresent();
        expect(page.find(Content)).toBePresent();
    });
});
