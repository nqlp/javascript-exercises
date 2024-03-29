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
        let finalSum = 0;
        for (let i = firstNum; i <= secondNum; i++) {
            finalSum += i;
        }
        return finalSum;
    }

    else {
        let finalSum = 0;
        for (let i = firstNum; i <= secondNum; i++) {
            finalSum += i;
        }
        return finalSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
