class Check {
    static notNull(value) {
        if (value == null) {
            throw new Error('Expected not null');
        }
        return value;
    }
}

module.exports = Check;
