const reverseString = function (string) {
    let finalString = "";

    for (i = string.length; i > 0; i--) {
        finalString += string[i - 1];
    }

    return finalString;
};

// console.log(reverseString("Hello, World!"))

// Do not edit below this line
module.exports = reverseString;
