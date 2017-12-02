const expect = require("chai").expect;
const checksum = require('./checksum');
const input = require('./input').input;

describe('Day 2 Puzzle1', () => {

    it('should calculate a checksum of 18', () => {
        const input = `5	1	9	5
        7	5	3
        2	4	6	8`;
        expect(checksum.calculateMinMaxSum(input)).to.equal(18);
    });

    it('should calculate a checksum of 1799', () => {
        expect(checksum.calculateMinMaxSum(`278	1689	250	1512	1792	1974	175	1639	235	1635	1690	1947	810	224	928	859`)).to.equal(1799);
    });

    it('should calculate a checksum of 587', () => {
        expect(checksum.calculateMinMaxSum(`114	605	94	136	96	167	553	395	164	159	284	104	530	551	544	18`)).to.equal(587);
    });

    it('should calculate a checksum of 42378', () => {
        expect(checksum.calculateMinMaxSum(input)).to.equal(42378);
    });
});
