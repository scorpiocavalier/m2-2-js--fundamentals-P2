// Q12
// Build on what you did for Q11.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// < 100 is A

// Write function here
const averageGrade = grades => {
    let average = grades.reduce((total, num) => total + num) / grades.length;

    let grade = '';
    if(average < 60)
        grade = 'F';
    else if(average < 70)
        grade = 'D';
    else if(average < 80)
        grade = 'C';
    else if(average < 90)
        grade = 'B';
    else if(average < 100)
        grade = 'A';
    else
        grade = 'PERFECT CLASS';
    
    return grade;
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log("Q12: ", averageGrade([48, 95, 65, 48, 59, 78, 72, 65]));
// Try with other values as well
console.log("Q12: ", averageGrade([85, 95, 78, 89, 100, 88, 72, 95]));
