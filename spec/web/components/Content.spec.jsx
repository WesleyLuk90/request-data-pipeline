const React = require('react');
const { shallow } = require('enzyme');

const Content = require('../../../src/web/components/Content');
const Module = require('../../../src/web/Module');

describe('<Content />', () => {
    let module;
    let router;

    beforeEach(() => {
        router = {};
        module = new Module({
            router,
        });
    });

    it('should contain a content container', () => {
        const page = shallow(<Content module={module} />);
        expect(page.find('.content')).toBePresent();
    });
});
