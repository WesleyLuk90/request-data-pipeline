const ObjectId = require('mongodb').ObjectId;
/* eslint-disable no-underscore-dangle */

class StorageService {
    constructor(database, tableName, modelClass) {
        this.database = database;
        this.tableName = tableName;
        this.modelClass = modelClass;
    }

    getDatabase() {
        return this.database;
    }

    getCollection() {
        return this.database.get()
            .then(db => db.collection(this.tableName));
    }

    getTableName() {
        return this.tableName;
    }

    getModelClass() {
        return this.modelClass;
    }

    validateInstance(instance) {
        if (!(instance instanceof this.modelClass)) {
            throw new Error(`Expected an instance of '${this.modelClass.name}'`);
        }
    }

    hasId(instance) {
        return instance.id != null;
    }

    validateNoId(instance) {
        if (this.hasId(instance)) {
            throw new Error('Expected instance to not have an id');
        }
    }

    validateId(instance) {
        if (!this.hasId(instance)) {
            throw new Error('Expected instance to have an id');
        }
    }

    wrapId(id) {
        if (id instanceof ObjectId) {
            return id;
        }
        if (typeof id === 'string') {
            return ObjectId.createFromHexString(id);
        }
        throw new Error(`Invalid object id ${id}`);
    }

    create(instance) {
        this.validateInstance(instance);
        this.validateNoId(instance);

        const data = instance.toJsonObject();

        return this.getCollection()
            .then(collection => collection.insertOne(data))
            .then((insertionResults) => {
                const updatedInstance = instance;
                updatedInstance.id = insertionResults.insertedId.toString();
                return updatedInstance;
            });
    }

    update(instance) {
        this.validateInstance(instance);
        this.validateId(instance);
    }

    get(id) {

    }

    delete(instance) {
        this.validateInstance(instance);
        this.validateId(instance);
    }
}

module.exports = StorageService;
