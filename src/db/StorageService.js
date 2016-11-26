/* eslint-disable no-underscore-dangle */

const ObjectId = require('mongodb').ObjectId;

const RestUtils = require('../shared/RestUtils');
const Check = require('../util/Check');
const NotFoundError = require('./NotFoundError');

class StorageService {
    constructor(database, tableName, modelClass) {
        this.database = Check.notNull(database);
        this.tableName = Check.notNull(tableName);
        this.modelClass = Check.notNull(modelClass);
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
        throw new Error(`Invalid object id '${id}'`);
    }

    createClass(data) {
        const Klass = this.modelClass;
        const cleanedData = data;
        cleanedData.id = cleanedData._id.toHexString();
        delete cleanedData._id;
        return RestUtils.load(cleanedData, new Klass());
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

        const data = instance.toJsonObject();
        const id = data.id;
        delete data.id;
        data._id = this.wrapId(id);

        return this.getCollection()
            .then(collection => collection.updateOne({ _id: data._id }, data))
            .then(() => instance);
    }

    get(id) {
        const wrappedId = this.wrapId(id);

        return this.getCollection()
            .then(collection => collection.findOne({ _id: wrappedId }))
            .then((data) => {
                if (!data) {
                    throw new NotFoundError(`Failed to find instance with id '${wrappedId.toHexString()}'`);
                }
                return this.createClass(data);
            });
    }

    delete(instance) {
        this.validateInstance(instance);
        this.validateId(instance);

        const wrappedId = this.wrapId(instance.id);

        return this.getCollection()
            .then(collection => collection.deleteOne({ _id: wrappedId }));
    }

    list(filter) {
        return this.getCollection()
            .then(collection => collection.find(filter).toArray())
            .then(results => results.map(data => this.createClass(data)));
    }
}

module.exports = StorageService;
