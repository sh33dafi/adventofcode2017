const parseRow = (row) => row.split('\t').map(digit => parseInt(digit));

const parseSpreadSheet = (input) => input.split('\n').map(parseRow);

const calculateSumOfRow = (row) => Math.max(...row) - Math.min(...row);

const sumAllRows = (accumulator, currentValue) => accumulator + currentValue;

exports.calculate = (input) => {
    const parsedSpreadsheet = parseSpreadSheet(input);
    return parsedSpreadsheet
        .map(calculateSumOfRow)
        .reduce(sumAllRows, 0);
};