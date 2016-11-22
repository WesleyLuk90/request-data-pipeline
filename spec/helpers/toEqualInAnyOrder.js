const customMatchers = {
    toEqualInAnyOrder(util, customEqualityTesters) {
        return {
            compare(actual, expected) {
                if (!Array.isArray(actual)) {
                    return {
                        pass: false,
                        message: 'Expected actual to be an array method',
                    };
                }
                if (!Array.isArray(expected)) {
                    return {
                        pass: false,
                        message: 'Expected expected to be an array method',
                    };
                }
                const result = {};
                result.pass = actual.length === expected.length && actual.every(actualElement =>
                    expected.some((expectedElement, index) => {
                        if (util.equals(actualElement, expectedElement, customEqualityTesters)) {
                            expected.splice(index, 1);
                            return true;
                        }
                        return false;
                    }));
                if (result.pass) {
                    result.message = 'Expected actual to not equal in any order expected';
                } else {
                    result.message = 'Expected actual to equal in any order expected';
                }

                return result;
            },
        };
    },
};

beforeEach(() => {
    jasmine.addMatchers(customMatchers);
});
