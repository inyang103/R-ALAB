const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (let i = 0; i < timesTenIfOverFive.length; i++) {
    if (timesTenIfOverFive[i] >= 5) {
        timesTenIfOverFive[i] *= 10;
    }
}
console.log(timesTenIfOverFive);
// Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]