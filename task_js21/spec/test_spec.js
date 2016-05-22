var testUnit = require('../js/script.js');

describe('testUnit', function() {
    it('pow() test #1', function () {
        var result;
        result = testUnit.pow(5, 3);
        expect(result).toBe(125);
    });

    it('pow() test #2', function () {
        var result;
        result = testUnit.pow(2, -3);
        expect(result).toBe(0.125);
    });
});