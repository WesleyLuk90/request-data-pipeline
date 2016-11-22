const customMatchers = {
    toJsonEquals(util, customEqualityTesters) {
        return {
            compare(actual, expected) {
                if (!(actual.toJsonObject)) {
                    return {
                        pass: false,
                        message: 'Expected actual to have a toJsonObject method',
                    };
                }
                if (!(expected.toJsonObject)) {
                    return {
                        pass: false,
                        message: 'Expected actual to have a toJsonObject method',
                    };
                }
                const result = {};
                result.pass = util.equals(
                    actual.toJsonObject(),
                    expected.toJsonObject(),
                    customEqualityTesters);
                if (result.pass) {
                    result.message = 'Expected actual to not equal expected';
                } else {
                    result.message = 'Expected actual to equal expected';
                }

                return result;
            },
        };
    },
    toJsonArrayEquals(util, customEqualityTesters) {
        return {
            compare(actual, expected) {
                if (!Array.isArray(actual)) {
                    return {
                        pass: false,
                        message: `Expected actual to be an array but was ${actual}`,
                    };
                }
                if (!Array.isArray(expected)) {
                    return {
                        pass: false,
                        message: `Expected expected to be an array but was ${expected}`,
                    };
                }
                const result = {};
                const actualJson = actual.map(o => o.toJsonObject());
                const expectedJson = expected.map(o => o.toJsonObject());
                result.pass = util.equals(actualJson, expectedJson, customEqualityTesters);
                if (result.pass) {
                    result.message = `Expected\n${JSON.stringify(actualJson)}\nto not equal\n${JSON.stringify(expectedJson)}`;
                } else {
                    result.message = `Expected\n${JSON.stringify(actualJson)}\nto equal\n${JSON.stringify(expectedJson)}`;
                }

                return result;
            },
        };
    },
};

beforeEach(() => {
    jasmine.addMatchers(customMatchers);
});
