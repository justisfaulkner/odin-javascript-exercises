const fibonacci = function (n) {
    if (n < 0) return "OOPS"
    
    let nMinus2 = 0;
    let nMinus1 = 0;
    let nCurr = 0;
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === 2) {
            nMinus1 = 1;
            nMinus2 = 1;
            nCurr = 1;
            continue;
        }
        nCurr = nMinus2 + nMinus1;
        nMinus2 = nMinus1
        nMinus1 = nCurr
    }
    
    return nCurr;
}

console.log(fibonacci("cat"))

// Do not edit below this line
module.exports = fibonacci;
