const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let prop in checkObj) {
    if (checkObj[prop] >= 2) {
        objToArray.push(checkObj[prop])
    }
}
console.log(objToArray);