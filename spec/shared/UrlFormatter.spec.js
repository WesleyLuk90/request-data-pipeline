const UrlFormatter = require('../../src/shared/UrlFormatter');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('UrlFormatter', () => {
    class RestSomeClass extends BaseRestClass {}
    it('should exist', () => {
        expect(UrlFormatter).toBeTruthy();
    });

    it('should format urls', () => {
        expect(UrlFormatter.getCreateUrl(RestSomeClass)).toBe('/api/some-class/create');
        expect(UrlFormatter.getDeleteUrl(RestSomeClass)).toBe('/api/some-class/delete');
        expect(UrlFormatter.getUpdateUrl(RestSomeClass)).toBe('/api/some-class/update');
        expect(UrlFormatter.getListUrl(RestSomeClass)).toBe('/api/some-class/list');
    });

    it('should get class base name', () => {
        expect(UrlFormatter.getClassBaseName(RestSomeClass)).toBe('SomeClass');
    });

    it('should get model key', () => {
        expect(UrlFormatter.getModelKey(RestSomeClass)).toBe('some_class');
    });

    it('should get model plural key', () => {
        expect(UrlFormatter.getModelsKey(RestSomeClass)).toBe('some_classes');
    });
});
