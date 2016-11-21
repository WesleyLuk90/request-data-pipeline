const mongodb = require('mongodb');
const Check = require('../util/Check');

class Database {
    constructor(config) {
        this.config = Check.notNull(config);
    }
    get() {
        return mongodb.MongoClient.connect(this.config.getUrl());
    }
}

Database.$name = 'database';
Database.$inject = ['dbConfig'];

module.exports = Database;
