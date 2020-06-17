// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

for(let num=0; num<=999; num++) {
    
    let sumOfCubes = 0;
    let strNum = num.toString();

    for(let i=0; i<strNum.length; i++)
        sumOfCubes += Math.pow(strNum[i].valueOf(), 3);

    if(sumOfCubes === num)
        armstrongNumbers.push(num);
}

console.log(armstrongNumbers);