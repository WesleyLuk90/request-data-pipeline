const path = require('path');
const generators = require('yeoman-generator');
const generatorUtils = require('../generatorUtils');

class Generator extends generators.Base {
    constructor(...args) {
        super(...args);
        this.argument('namespace', { type: String, required: true });
    }

    writing() {
        const namespace = this.namespace;
        const componentName = generatorUtils.getBasename(namespace);
        if (generatorUtils.getNamespaceErrors(namespace)) {
            this.abort = true;
            this.log.error(generatorUtils.getNamespaceErrors(namespace));
            return;
        }

        const jsPath = path.join('src/web/', `${namespace}.jsx`);
        const specPath = path.join('spec/web/', `${namespace}.spec.jsx`);
        this.fs.copyTpl(
            this.templatePath('Component.js.tpl'),
            this.destinationPath(jsPath), {
                component_name: componentName,
            });
        this.fs.copyTpl(
            this.templatePath('ComponentSpec.js.tpl'),
            this.destinationPath(specPath), {
                component_name: componentName,
                spec_import_path: generatorUtils.relativePathTo(specPath, jsPath),
            });
    }
}
module.exports = Generator;
