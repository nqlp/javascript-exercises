const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    }
    if (num >= 0) {
        for (let i = 0; i <= num; i++) {
            return string.repeat(num);
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
