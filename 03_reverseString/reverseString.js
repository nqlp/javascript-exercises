const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
