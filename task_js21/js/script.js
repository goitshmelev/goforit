var testUnit = {
    pow : function (number, exponent) {
            if (exponent <=0 && number == 0) {
                return NaN;
            }

            if (exponent == 0 && number != 0) {
                return 1;
            }

            var edit_exponent = Math.abs(exponent);
            var result = 1;

            for (var i = 0; i < edit_exponent; i++) {
                result *= number;
            }

            if (exponent > 0) {
                return result;
            }

            return 1 / result;
        }
}

try {
    module.exports = testUnit;
} catch (e) {}