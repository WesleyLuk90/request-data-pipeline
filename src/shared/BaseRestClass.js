const _ = require('lodash');

class BaseRestClass {
    toJsonObject() {
        const jsonObject = {};
        Object.keys(this).forEach((key) => {
            jsonObject[_.snakeCase(key)] = this[key];
        });
        return jsonObject;
    }
    toJson() {
        return JSON.stringify(this.toJsonObject());
    }
}

module.exports = BaseRestClass;
