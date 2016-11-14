const React = require('react');
const { shallow } = require('enzyme');

const MockEvent = require('../MockEvent');
const Navigation = require('../../../src/web/components/Navigation');

describe('<Navigation />', () => {
    it('should contain links', () => {
        const page = shallow(<Navigation module={{}} />);
        const links = page.find('.navigation-links__link');
        expect(links.length).toBe(4);
        expect(links.at(0).text()).toMatch(/Data Sources/);
        expect(links.at(1).text()).toMatch(/Transforms/);
        expect(links.at(2).text()).toMatch(/Pipelines/);
        expect(links.at(3).text()).toMatch(/Settings/);
    });

    it('should navigate when clicking links', () => {
        const router = {
            go: jasmine.createSpy('router.go'),
        };

        const page = shallow(<Navigation module={{ router }} />);
        const links = page.find('.navigation-links__link');

        links.at(0).simulate('click', MockEvent.create());
        expect(router.go).toHaveBeenCalledWith('data-sources');
        links.at(1).simulate('click', MockEvent.create());
        expect(router.go).toHaveBeenCalledWith('transforms');
        links.at(2).simulate('click', MockEvent.create());
        expect(router.go).toHaveBeenCalledWith('pipelines');
        links.at(3).simulate('click', MockEvent.create());
        expect(router.go).toHaveBeenCalledWith('settings');
    });
});
