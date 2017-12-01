const captcha = require('./captcha');
const input = require('./input').input;

console.log('Puzzle 1: ', captcha.sumOf(input));
console.log('Puzzle 2: ', captcha.sumOfHalfwayAround(input));
