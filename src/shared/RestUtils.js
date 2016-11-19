const _ = require('lodash');
const BaseRestClass = require('./BaseRestClass');

class RestUtils {
    static checkData(data) {
        if (!data || typeof data !== 'object') {
            throw new Error('Data must be an object');
        }
    }
    static checkIntoObject(intoObject) {
        if (!(intoObject instanceof BaseRestClass)) {
            throw new Error('Class must extend BaseRestClass');
        }
    }

    static validateData(data, intoObject) {
        Object.keys(data).forEach((key) => {
            const camelKey = _.camelCase(key);
            if (intoObject.constructor.prototype[camelKey]) {
                throw new Error(`Can not reassign value for key '${camelKey}'`);
            }
        });
    }

    static load(data, intoObject) {
        RestUtils.checkData(data);
        RestUtils.checkIntoObject(intoObject);
        RestUtils.validateData(data, intoObject);

        const loadedObject = intoObject;
        Object.keys(data).forEach((key) => {
            loadedObject[_.camelCase(key)] = data[key];
        });
        return loadedObject;
    }
}

module.exports = RestUtils;
