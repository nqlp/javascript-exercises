const sumAll = function (firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    else if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }

    else if (firstNum > secondNum) {
        let temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
        return calculateSumInRange(firstNum, secondNum);
    }

    else {
        return calculateSumInRange(firstNum, secondNum);
    }
};

const calculateSumInRange = function (firstNum, secondNum) {
    let finalSum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        finalSum += i;
    }
    return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
