const { ShallowWrapper } = require('enzyme');

const customMatchers = {
    toBePresent() {
        return {
            compare(actual) {
                if (!(actual instanceof ShallowWrapper)) {
                    return {
                        pass: false,
                        message: 'Expected element to be a ShallowWrapper',
                    };
                }
                const result = {};
                result.pass = actual.length === 1;
                if (result.pass) {
                    result.message = 'Expected element not to be present';
                } else {
                    result.message = 'Expected element to be present';
                }

                return result;
            },
        };
    },
};

beforeEach(() => {
    jasmine.addMatchers(customMatchers);
});
