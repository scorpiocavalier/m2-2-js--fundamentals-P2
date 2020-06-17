// Q15
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {

    // USING: .forEach(), .indexOf(), .slice()
    // let unique = array.slice();
    // unique.forEach((num, index) => {
    //     let foundIndex = unique.indexOf(num, index+1);
    //     // If it's -1 it's unique, otherwise remove it.
    //     if(foundIndex != -1)
    //         unique.splice(foundIndex, 1);
    // });
    
    // USING: .forEach(), .indexOf, .push()
    // let unique = [];
    // // If it's not in the unique array, add to it.
    // array.forEach(num => unique.indexOf(num) == -1 && unique.push(num));
    // return unique;
    
    // USING: .filter(), .indexOf()
    // Return a new array with only unique numbers.
    return array.filter((num, index) => array.indexOf(num, index+1) == -1);
}

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));
