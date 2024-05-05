const palindromes = function (string) {
    const formattedString = string.replace(/\W+/g, '').toLowerCase();
    let backwards = '';
    for (let i = formattedString.length - 1; i >= 0; i--) {
        backwards += formattedString[i];
    }
    return formattedString === backwards
};

// Do not edit below this line
module.exports = palindromes;
