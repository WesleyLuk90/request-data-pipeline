const <%= component_name %> = require('<%= spec_import_path %>');

describe('<%= component_name %>', () => {
    it('should exist', () => {
        expect(<%= component_name %>).toBeTruthy();
    });
});
