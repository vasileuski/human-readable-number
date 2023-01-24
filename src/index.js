module.exports = function toReadable(number) {
    const singleNum = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const twoDigitNum = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tensNum = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const threeDigitNum = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    if (number < 10) {
        return singleNum[number];
    }

    if (number === 10) {
        return tensNum[0];
    }

    if (number > 10 && number < 20) {
        return twoDigitNum[number - 11];
    }

    if (number >= 20 && number < 100) {
        const arrNum = [...number.toString()].map(Number);
        if (arrNum[1] === 0) {
            return tensNum[arrNum[0] - 1];
        }
        return tensNum[arrNum[0] - 1] + " " + singleNum[arrNum[1]];
    }

    if (number >= 100 && number < 1000) {
        const arrNum = [...number.toString()].map(Number);
        if (arrNum[1] === 0 && arrNum[2] === 0) {
            return threeDigitNum[arrNum[0] - 1];
        }
        if (arrNum[1] === 0 && arrNum[2] > 0) {
            return threeDigitNum[arrNum[0] - 1] + " " + singleNum[arrNum[2]];
        }
        if (arrNum[1] === 1 && arrNum[2] !== 0) {
            return (
                threeDigitNum[arrNum[0] - 1] + " " + twoDigitNum[arrNum[2] - 1]
            );
        }
        if (arrNum[2] === 0) {
            return threeDigitNum[arrNum[0] - 1] + " " + tensNum[arrNum[1] - 1];
        }
        return (
            threeDigitNum[arrNum[0] - 1] +
            " " +
            tensNum[arrNum[1] - 1] +
            " " +
            singleNum[arrNum[2]]
        );
    }
};
