const expect = require("chai").expect;
const checksum = require('./checksum');
const input = require('./input').input;

describe('Day 2 Puzzle1', () => {

    it('should calculate a checksum of 4', () => {
        const input = `5	9	2	8`;
        expect(checksum.calculateEvenlyDivisble(input)).to.equal(4);
    });

    it('should calculate a checksum of 3', () => {
        const input = `9	4	7	3`;
        expect(checksum.calculateEvenlyDivisble(input)).to.equal(3);
    });

    it('should calculate a checksum of 2', () => {
        const input = `3	8	6	5`;
        expect(checksum.calculateEvenlyDivisble(input)).to.equal(2);
    });

    it('should calculate a checksum of 9', () => {
        const input = `5	9	2	8
        9	4	7	3
        3	8	6	5`;
        expect(checksum.calculateEvenlyDivisble(input)).to.equal(9);
    });

    it('should calculate a checksum of 1799', () => {
        expect(checksum.calculateMinMaxSum(`278	1689	250	1512	1792	1974	175	1639	235	1635	1690	1947	810	224	928	859`)).to.equal(1799);
    });

    it('should calculate a checksum of 587', () => {
        expect(checksum.calculateMinMaxSum(`114	605	94	136	96	167	553	395	164	159	284	104	530	551	544	18`)).to.equal(587);
    });

    it('should calculate a checksum of 246', () => {
        expect(checksum.calculateEvenlyDivisble(input)).to.equal(246);
    });
});
