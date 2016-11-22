const UrlFormatter = require('../../src/shared/UrlFormatter');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('UrlFormatter', () => {
    it('should exist', () => {
        expect(UrlFormatter).toBeTruthy();
    });

    it('should format urls', () => {
        class RestSomeClass extends BaseRestClass {}
        expect(UrlFormatter.getCreateUrl(RestSomeClass)).toBe('/api/some-class/create');
        expect(UrlFormatter.getDeleteUrl(RestSomeClass)).toBe('/api/some-class/delete');
        expect(UrlFormatter.getUpdateUrl(RestSomeClass)).toBe('/api/some-class/update');
        expect(UrlFormatter.getListUrl(RestSomeClass)).toBe('/api/some-class/list');
    });
});
