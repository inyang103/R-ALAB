const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let prop in checkObj) {
    if (prop === 'foundNum') {
        found = 1;
        break
    }
}
console.log(found);