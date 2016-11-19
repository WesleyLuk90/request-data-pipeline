const path = require('path');
const generators = require('yeoman-generator');
const _ = require('lodash');

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

        const jsPath = path.join('src/', `${namespace}.js`);
        const specPath = path.join('spec/', `${namespace}.spec.js`);

        const data = {
            camel_component_name: _.camelCase(componentName),
            component_name: componentName,
            spec_import_path: generatorUtils.relativePathTo(specPath, jsPath),
        };

        this.fs.copyTpl(
            this.templatePath('Component.js.tpl'),
            this.destinationPath(jsPath), data);
        this.fs.copyTpl(
            this.templatePath('ComponentSpec.js.tpl'),
            this.destinationPath(specPath), data);
    }
}
module.exports = Generator;
