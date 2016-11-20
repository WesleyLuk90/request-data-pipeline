function configure(bottle) {
    bottle.register(require('./Database'));
    bottle.register(require('./DbConfig'));
    bottle.register(require('./StorageServiceFactory'));
}

module.exports = {
    configure,
};
