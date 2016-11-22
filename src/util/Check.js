class Check {
    static notNull(value) {
        if (value == null) {
            throw new Error('Expected not null');
        }
        return value;
    }

    static instanceOf(value, klass) {
        Check.notNull(value);
        Check.notNull(klass);
        if (!(value instanceof klass)) {
            throw new Error(`Expected an instance of ${klass.name}`);
        }
        return value;
    }

    static subClassOf(subClass, klass) {
        Check.notNull(subClass);
        Check.notNull(klass);
        if (!(subClass.prototype instanceof klass) && subClass !== klass) {
            throw new Error(`Expected a subclass of ${klass.name}`);
        }
        return subClass;
    }

    static isArray(array) {
        if (!Array.isArray(array)) {
            throw new Error('Expected an array');
        }
        return array;
    }
}

module.exports = Check;
