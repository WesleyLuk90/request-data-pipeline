const _ = require('lodash');

class UrlFormatter {

    static getUrlChunk(restClass) {
        return _.kebabCase(restClass.name.replace(/^Rest/, ''));
    }

    static getCreateUrl(restClass) {
        return `/api/${UrlFormatter.getUrlChunk(restClass)}/create`;
    }

    static getDeleteUrl(restClass) {
        return `/api/${UrlFormatter.getUrlChunk(restClass)}/delete`;
    }

    static getUpdateUrl(restClass) {
        return `/api/${UrlFormatter.getUrlChunk(restClass)}/update`;
    }
}

module.exports = UrlFormatter;
