const Database = require('../../src/db/Database');
const DbConfig = require('../../src/db/DbConfig');

describe('Database', () => {
    it('should exist', () => {
        expect(Database).toBeTruthy();
    });

    it('should connect', (done) => {
        new Database(new DbConfig()).get().then((con) => {
            expect(con).toBeTruthy();
            done();
        });
    });
});
