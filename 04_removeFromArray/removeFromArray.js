const removeFromArray = function (array, ...itemN) {
    finalArray = array.filter((item) => !itemN.includes(item));
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
