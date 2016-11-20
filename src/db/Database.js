const mongodb = require('mongodb');

class Database {
    constructor(config) {
        this.config = config;
    }
    get() {
        return mongodb.MongoClient.connect(this.config.getUrl());
    }
}

Database.$name = 'database';
Database.$inject = [];

module.exports = Database;
