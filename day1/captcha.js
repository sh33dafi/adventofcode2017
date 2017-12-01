function getNextDigit(digits, i, shift) {
    if (shift) {
        return (i + shift >= digits.length) ? digits[i - shift] : digits[i + shift];
    }
    return (i + 1 >= digits.length) ? digits[0] : digits[i + 1];
}

function calcSumOf(digits, shift) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const nextDigit = getNextDigit(digits, i, shift);

        if (digit === nextDigit) {
            sum += parseInt(digit);
        }
    }
    return sum;
}

exports.sumOf = (digits) => calcSumOf(digits);
exports.sumOfHalfwayAround = (digits) => calcSumOf(digits, digits.length / 2);
