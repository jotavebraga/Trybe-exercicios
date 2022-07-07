const { describe } = require("yargs");

const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

it('transformar `jotinha` em `JOTINHA`', (done) => {
    uppercase('jotinha', (str) => {
        expect(str).toBe('JOTINHA');
        done();
    });
});
