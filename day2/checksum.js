const parseRow = (row) => row.split('\t').map(digit => parseInt(digit));

const parseSpreadSheet = (input) => input.split('\n').map(parseRow);

const substractMaxAndMinValueOfRow = (row) => Math.max(...row) - Math.min(...row);

const nulls = it => !!it;

const foo = (row) => {
    return row.map((digit, index) => {
        const splicedRow = [...row];
        splicedRow.splice(index, 1);
        return splicedRow.reduce((acc, cv) => {
            return ((digit % cv ) === 0) ? digit / cv : acc;
        }, null);
    }).filter(nulls)[0];
};

const sumAllRows = (accumulator, currentValue) => accumulator + currentValue;

exports.calculateMinMaxSum = (input) => {
    const parsedSpreadsheet = parseSpreadSheet(input);
    return parsedSpreadsheet
        .map(substractMaxAndMinValueOfRow)
        .reduce(sumAllRows, 0);
};

exports.calculateEvenlyDivisble = (input) => {
    const parsedSpreadsheet = parseSpreadSheet(input);
    return parsedSpreadsheet
        .map(foo)
        .reduce(sumAllRows, 0);
};

