const sumAll = function(min, max) {
    
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    //the below is a better way to swamp the values
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    //this is probably the best way to switch values
    // if (min > max) [min, max] = [max, min];

    //this was my first attempt at swapping values, while it works, it could be tighter
    // let highNumber;
    // let lowNumber;
    // if (n1 > n2) {
    //     highNumber = n1;
    //     lowNumber = n2;
    // } else if (n2 > n1) {
    //     highNumber = n2;
    //     lowNumber = n1;
    // } else {
    //     highNumber = n2;
    //     lowNumber = n1;
    // }

    let finalSum = 0;
    for (let i = min; i <= max; i++) {
        finalSum += i
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
