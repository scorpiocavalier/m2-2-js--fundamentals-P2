// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    // using .forEach()
    // let sum = 0;
    // grades.forEach(num => sum += num);
    // let average = sum/grades.length
    
    let average = grades.reduce((sum, num) => sum + num) / grades.length;
    return Math.round(average);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
