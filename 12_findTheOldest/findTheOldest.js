const findTheOldest = function(arr) {
    return arr.reduce((oldest, curr) => {
        curr.yearOfDeath = curr.yearOfDeath ?? new Date().getFullYear();

        const currAge = curr.yearOfDeath - curr.yearOfBirth
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth

        return currAge > oldestAge ? curr : oldest
    }, arr[0]);
};

// const findTheOldest = function(arr) {
//     return arr.reduce((oldest, curr) => {
//         if (typeof(curr.yearOfDeath) === 'undefined') {
//             curr.yearOfDeath = new Date().getFullYear();
//         }
//         if (curr.yearOfDeath - curr.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
//             oldest = curr;
//         }
//         console.log(oldest)
//         return oldest 
//     }, arr[0])
// };

// Do not edit below this line
module.exports = findTheOldest;
