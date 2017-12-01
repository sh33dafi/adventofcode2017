const expect = require("chai").expect;
const captcha = require('./captcha');

describe('Day 1 Puzzle1', () => {
    describe('When the input is 1122', () => {
        it('should have the sum 3', () => {
            expect(captcha.sumOf('1122')).to.equal(3);
        });
    });

    describe('When the input is 1111', () => {
        it('should have the sum 4', () => {
            expect(captcha.sumOf('1111')).to.equal(4);
        });
    });

    describe('When the input is 1234', () => {
        it('should have the sum 0', () => {
            expect(captcha.sumOf('1234')).to.equal(0);
        });
    });

    describe('When the input is 91212129', () => {
        it('should have the sum 9', () => {
            expect(captcha.sumOf('91212129')).to.equal(9);
        });
    });

});
