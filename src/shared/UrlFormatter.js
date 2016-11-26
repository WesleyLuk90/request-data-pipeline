const _ = require('lodash');
const pluralize = require('pluralize');

class UrlFormatter {

    static getClassBaseName(restClass) {
        return restClass.name.replace(/^Rest/, '');
    }

    static getUrlChunk(restClass) {
        return _.kebabCase(UrlFormatter.getClassBaseName(restClass));
    }

    static getBaseEndpoint(restClass) {
        return `/api/${UrlFormatter.getUrlChunk(restClass)}`;
    }

    static getCreateUrl(restClass) {
        return `${UrlFormatter.getBaseEndpoint(restClass)}/create`;
    }

    static getDeleteUrl(restClass) {
        return `${UrlFormatter.getBaseEndpoint(restClass)}/delete`;
    }

    static getUpdateUrl(restClass) {
        return `${UrlFormatter.getBaseEndpoint(restClass)}/update`;
    }

    static getListUrl(restClass) {
        return `${UrlFormatter.getBaseEndpoint(restClass)}/list`;
    }

    static getGetUrl(restClass) {
        return `${UrlFormatter.getBaseEndpoint(restClass)}/get`;
    }

    static getModelKey(restClass) {
        return _.snakeCase(UrlFormatter.getClassBaseName(restClass));
    }

    static getModelsKey(restClass) {
        return _.snakeCase(pluralize(UrlFormatter.getClassBaseName(restClass)));
    }
}

module.exports = UrlFormatter;
