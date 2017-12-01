const expect = require("chai").expect;
const captcha = require('./captcha');

describe('Day 1 Puzzle2', () => {
    describe('When the input is 1212', () => {
        it('should have the sum 6', () => {
            expect(captcha.sumOfHalfwayAround('1212')).to.equal(6);
        });
    });

    describe('When the input is 1221', () => {
        it('should have the sum 0', () => {
            expect(captcha.sumOfHalfwayAround('1221')).to.equal(0);
        });
    });

    describe('When the input is 123425', () => {
        it('should have the sum 0', () => {
            expect(captcha.sumOfHalfwayAround('123425')).to.equal(4);
        });
    });

    describe('When the input is 123123', () => {
        it('should have the sum 12', () => {
            expect(captcha.sumOfHalfwayAround('123123')).to.equal(12);
        });
    });

    describe('When the input is 12131415', () => {
        it('should have the sum 4', () => {
            expect(captcha.sumOfHalfwayAround('12131415')).to.equal(4);
        });
    });

});
